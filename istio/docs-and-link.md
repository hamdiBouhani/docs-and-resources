
[Setting up on ISTIO on EKS cluster using Terraform or Helm:](https://stackoverflow.com/questions/66851553/setting-up-on-istio-on-eks-cluster-using-terraform-or-helm)



[Terraform helm provider:](https://registry.terraform.io/providers/hashicorp/helm/latest/docs)

```HCL
provider "helm" {
  kubernetes {
    // enter the relevant authentication
  }
}

locals {
  istio_charts_url = "https://istio-release.storage.googleapis.com/charts"
}

resource "helm_release" "istio-base" {
  repository       = local.istio_charts_url
  chart            = "base"
  name             = "istio-base"
  namespace        = var.istio-namespace
  version          = "1.12.1"
  create_namespace = true
}

resource "helm_release" "istiod" {
  repository       = local.istio_charts_url
  chart            = "istiod"
  name             = "istiod"
  namespace        = var.istio-namespace
  create_namespace = true
  version          = "1.12.1"
  depends_on       = [helm_release.istio-base]
}

resource "kubernetes_namespace" "istio-ingress" {
  metadata {
    labels = {
      istio-injection = "enabled"
    }

    name = "istio-ingress"
  }
}

resource "helm_release" "istio-ingress" {
  repository = local.istio_charts_url
  chart      = "gateway"
  name       = "istio-ingress"
  namespace  = kubernetes_namespace.istio-ingress-label.id
  version    = "1.12.1"
  depends_on = [helm_release.istiod]
}
```





I have been researching this in the last months and want to add my findings to @Jakob's answer:

First, there is an answer to the pros/cons of the different installation method, so I will not say anything about that: https://istio.io/latest/faq/setup/#install-method-selection Basically all of them can be done with terraform in a certain way.

terraform + istioctl with terraform null_resource provider
This is basically the istioctl install -f <file> command. You can create a template file and to the istictl install command with the null_resource provider.
```hcl

resource "local_file" "setup_istio_config" {
  content = templatefile("${path.module}/istio-operator.tmpl", {
    enableHoldAppUntilProxyStarts = var.hold_app_until_proxy_starts
  })
  filename = "istio-operator.yaml"
}

resource "null_resource" "install_istio" {
  provisioner "local-exec" {
    command = "istioctl install -f \"istio-operator.yaml\" --kubeconfig ../${var.kubeconfig}"
  }
  depends_on = [local_file.setup_istio_config]
}

```
Pros:

Very easy setup

Cons:

How to upgrade using istioctl upgrade -f <file has to be solved somehow
istioctl must be installed in different versions when handling multiple clusters with different istio versions
Right istioctl version must be choosen on setup
I guess you can solve the upgrade process somehow, but the hole process is not really "infrastructure as code" enough. I didn't look into it further, because it doesn't seam to be good practice.

terraform + istio operator with terraform null_resource provider and kubectl provider
Similar the istio operator setup initializes the operator pod and takes a istio-operator.yml to setup istio for you.

```hcl

resource "null_resource" "init_operator" {
  provisioner "local-exec" {
    command = "istioctl operator init --kubeconfig ../${var.kubeconfig}"
  }
}

resource "kubectl_manifest" "setup_istio" {
  yaml_body = <<YAML
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
    name: istio-setup
    namespace: istio-system
spec:
  profile: default
  hub: gcr.io/istio-release
  tag: 1.9.2
  components:
    ingressGateways:
      - name: istio-ingressgateway
        enabled: true
  meshConfig:
    defaultConfig:
      holdApplicationUntilProxyStarts: ${var.hold_app_until_proxy_starts}"
YAML
  depends_on = [null_resource.init_operator]
}

```
It would be a good idea to wait for some seconds between the init and applying the config.

Here is a good article about doing this with Azure's aks: https://medium.com/@vipinagarwal18/install-istio-on-azure-kubernetes-cluster-using-terraform-214f6d3f611

Pros:

Easy to setup
Easy to upgrade istio using the kubectl provider
As long as helm is in alpha, this might be the best approach.

terraform + helm with terraform helm provider
Istio provides some charts for the different componentes, when downloading istioctl. Those can be used for installing it with helm.

resource "helm_release" "istio_base" {
  name       = "istio-base"
  chart      = "./manifests/charts/base"
  namespace  = "istio-system"
}
Cons:

Not ready for production
Bonus

istio manifest + helm
Some time ago I've read an article on how to use istio manifest from istioctl manifest generate in combination with helm to install and mange istio. This approach needs some custom code, but it could be done with terraform and the helm provider as well.

Please read: https://karlstoney.com/2021/03/04/ci-for-istio-mesh/index.html

Conclusion

Installing istio with terraform works but seams to be a bit dirty at the moment. Once the helm setup is stable, I guess this would be the best approach. And with the helm provider it can be composed with terraform creation of other resources. Terraform certainly misses an istio provider, but I don't think they will create one in the foreseeable future.

---

For all those who found @Benda's solution to the point. Here is the working template for the same. Since I faced a couple of issues with that template, I compiled it for my own use case. I hope its helpful.

```hcl

provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}
    
provider "kubernetes" {
  config_path    = "~/.kube/config"
}
  
locals {
  istio_charts_url = "https://istio-release.storage.googleapis.com/charts"
}
    
resource "kubernetes_namespace" "istio_system" {
  metadata {
    name = "istio-system"
    labels = {
      istio-injection = "enabled"
    }
  }
}
    
resource "helm_release" "istio-base" {
  repository       = local.istio_charts_url
  chart            = "base"
  name             = "istio-base"
  namespace        = kubernetes_namespace.istio_system.metadata.0.name
  version          = ">= 1.12.1"
  timeout          = 120
  cleanup_on_fail  = true
  force_update     = false
}
    
resource "helm_release" "istiod" {
  repository       = local.istio_charts_url
  chart            = "istiod"
  name             = "istiod"
  namespace        = kubernetes_namespace.istio_system.metadata.0.name
  version          = ">= 1.12.1"
  timeout          = 120
  cleanup_on_fail  = true
  force_update     = false
  
  set {
    name = "meshConfig.accessLogFile"
    value = "/dev/stdout"
  }
   
  depends_on       = [helm_release.istio-base]
}
    
resource "helm_release" "istio-ingress" {
  repository        = local.istio_charts_url
  chart             = "gateway"
  name              = "istio-ingress"
  namespace         = kubernetes_namespace.istio_system.metadata.0.name
  version           = ">= 1.12.1"
  timeout           = 500
  cleanup_on_fail   = true
  force_update      = false
  depends_on        = [helm_release.istiod]
}
```
PS: Please make sure you enable ports 15017 and 15021 in the master firewall rule for the istio ingress pod to properly start.

---
## Create AKS cluster in Azure
The following code snippet create myAKSCluster with one node, this will take several minutes, part of the script will create resource group, vnet, subnet, azure ead group for managed identity (you can use service principal instead of azure ead group).

```hcl
resource "azurerm_resource_group" "rg" {
  name     = "aks-resource-group"
  location = "eastus"
}

resource "azurerm_virtual_network" "vnet" {
  name                = "aks-vnet"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  address_space       = ["192.168.0.0/16"]
}

resource "azurerm_subnet" "subnet" {
  name                 = "aks-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["192.168.1.0/24"]
  service_endpoints    = ["Microsoft.ContainerRegistry"]
}

resource "azuread_group" "aks-admin-group" {
  name = "AKS-Aadmins"
}

resource "azurerm_kubernetes_cluster" "aks" {
  name                = "myAKSCluster"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "someapplication"
  default_node_pool {
    name                  = "default"
    vnet_subnet_id        = azurerm_subnet.subnet.id
    type                  = "VirtualMachineScaleSets"
    availability_zones    = ["1", "2", "3"]
    enable_auto_scaling   = true
    enable_node_public_ip = false
    max_count             = 3
    min_count             = 1
    os_disk_size_gb       = 256
    vm_size               = "Standard_D2_v2"
  }
  role_based_access_control {
    enabled = true
    azure_active_directory {
      managed                = true
      admin_group_object_ids = [azuread_group.aks-admin-group.id]
    }
  }
  identity {
    type = "SystemAssigned"
  }
  network_profile {
    network_plugin    = "azure"
    network_policy    = "azure"
    load_balancer_sku = "Standard"
  }

  addon_profile {
    aci_connector_linux {
      enabled = false
    }

    azure_policy {
      enabled = true
    }

    http_application_routing {
      enabled = false
    }

    kube_dashboard {
      enabled = true
    }
  }
}
```

## Install Istio components on AKS using terraform-

We’ll be installing Kiali and Grafana dashboards as part of our Istio installation. For each of these components requires credentials that must be provided as a Secret. These secretes need to be installed into the istio-system namespace that will be used by Istio.

This part of terraform code will create-

* istio-systemnamespace in AKS cluster
* kubernetes_secretfor grafana and kiali
* setting-up current context to use newly created kubernetes cluster
* Finally installing Istio manifest using istioctl

```hcl
###################Install Istio (Service Mesh) #######################################
resource "random_password" "password" {
  length           = 16
  special          = true
  override_special = "_%@"
}

data "azurerm_subscription" "current" {
}

resource "local_file" "kube_config" {
  content    = azurerm_kubernetes_cluster.aks.kube_admin_config_raw
  filename   = ".kube/config"   
}


resource "null_resource" "set-kube-config" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "az aks get-credentials -n ${azurerm_kubernetes_cluster.aks.name} -g ${azurerm_resource_group.rg.name} --file \".kube/${azurerm_kubernetes_cluster.aks.name}\" --admin --overwrite-existing"
  }
  depends_on = [local_file.kube_config]
}


resource "kubernetes_namespace" "istio_system" {
  provider = kubernetes.local
  metadata {
    name = "istio-system"
  }
}

resource "kubernetes_secret" "grafana" {
  provider = kubernetes.local
  metadata {
    name      = "grafana"
    namespace = "istio-system"
    labels = {
      app = "grafana"
    }
  }
  data = {
    username   = "admin"
    passphrase = random_password.password.result
  }
  type       = "Opaque"
  depends_on = [kubernetes_namespace.istio_system]
}

resource "kubernetes_secret" "kiali" {
  provider = kubernetes.local
  metadata {
    name      = "kiali"
    namespace = "istio-system"
    labels = {
      app = "kiali"
    }
  }
  data = {
    username   = "admin"
    passphrase = random_password.password.result
  }
  type       = "Opaque"
  depends_on = [kubernetes_namespace.istio_system]
}

resource "local_file" "istio-config" {
  content = templatefile("${path.module}/istio-aks.tmpl", {
    enableGrafana = true
    enableKiali   = true
    enableTracing = true
  })
  filename = ".istio/istio-aks.yaml"
}

resource "null_resource" "istio" {
  triggers = {
    always_run = "${timestamp()}"
  }
  provisioner "local-exec" {
    command = "istioctl manifest apply -f \".istio/istio-aks.yaml\" --kubeconfig \".kube/${azurerm_kubernetes_cluster.aks.name}\""
  }
  depends_on = [kubernetes_secret.grafana, kubernetes_secret.kiali, local_file.istio-config]
}

```

In the above deployment I have used istio-aks.yaml file, this will hold the istio control plane spec details for configuring istio. I have used a template file istio-aks.tmpl to generate actual yaml file, by doing this you can control configuration for enabling add-ons via terraform variables. (see line 70 to 77 in above code snippet)

Sample istio-aks.tmpl file.

```
apiVersion: install.istio.io/v1alpha2
kind: IstioControlPlane
spec:
  # Use the default profile as the base
  # More details at: https://istio.io/docs/setup/additional-setup/config-profiles/
  profile: default
  values:
    global:
      # Ensure that the Istio pods are only scheduled to run on Linux nodes
      defaultNodeSelector:
        beta.kubernetes.io/os: linux
      # Enable mutual TLS for the control plane
      controlPlaneSecurityEnabled: true
      mtls:
        # Require all service to service communication to have mtls
        enabled: false
    grafana:
      # Enable Grafana deployment for analytics and monitoring dashboards
      enabled: ${enableGrafana}
      security:
        # Enable authentication for Grafana
        enabled: true
    kiali:
      # Enable the Kiali deployment for a service mesh observability dashboard
      enabled: ${enableKiali}
    tracing:
      # Enable the Jaeger deployment for tracing
      enabled: ${enableTracing}
```

Once you have all the code ready by doing terraform apply will create AKS cluster, kubernetes secret, and install Istio using istioctl. In your console you can see the install will deploy number of CRDs.

If you can see above CRD’s installation in your console window means you have successfully deployed Istio to your AKS cluster. Let’s move on to validate our Istio installation and access Kiali and Grafana dashboards.

## Verify a successful Istio installation

You can check if the Istio installation succeeded using the verify-installcommand which compares the installation on your cluster to a manifest you specify.

```
$ istioctl verify-install -f istio-aks.yaml
```

## Access Kiali Dashboard

A service mesh observability dashboard is provided by kiali. First get the credentials from your cluster. To get credentials run the below code.

```
$ kubectl get secrets/kiali -n istio-system --template={{.data.passphrase}} | base64 -D
```

Then use the username ‘admin’ and password from the above output to access Kiali dashboard. To open the Kiali dashbaord securely as follows:

```
$ istioctl dashboard kiali
```

sample kiali dashboard
Access Grafana Dashboard
he analytics and monitoring dashboards for Istio are provided by Grafana . First get the credentials from your cluster. To get credentials run the below code.
```
$ kubectl get secrets/grafana -n istio-system --template={{.data.passphrase}} | base64 -D
```

Then use the username ‘admin’ and password from the above output to access Grafana dashboard. To open the Grafana dashbaord securely as follows:

```
$ istioctl dashboard grafana
```

Some other dashboards that are installed as part of our manifest file.


Jaeger for tracing

```
$ istioctl dashboard jaeger
```

Prometheus for metrics

```
$ istioctl dashboard prometheus
```

Cleanup resources

To clean-up all the resources you have created run

```
$ terraform destroy -auto-approve
```

Closing Remarks 🎉
I hope this article will help you with creating AKS cluster and setting-up Istio via manifest. Please feel free to share your feedback and experience in the comments section.

Complete source code can be downloaded from my public [github](https://github.com/VipinAgarwal/azure-aks-istio).

---

# Avoid the Terraform kubernetes_manifest resource

T
The kubernetes_manifest resource of the Kubernetes terraform provider allows you to create any Kubernetes resource given its YAML definition, so it ends up being useful with CRDs.

However it has major limitations that are likely to hurt your terraform workflow. Until such limitations are solved, you can use alternatives to create those resources such as the kubectl provider or the its contained/raw helm chart :

```
# Instead of this ...
resource "kubernetes_manifest" "external_secrets_cluster_store" {
  manifest = yamldecode(<<-EOF
    apiVersion: external-secrets.io/v1alpha1
    kind: ClusterSecretStore
    metadata:
      name: cluster-store
    spec:
      ... contents of the ClusterSecretStore omitted...
    EOF
  )
}
# Use this! (requires the kubectl provider to be registered)
resource "kubectl_manifest" "external_secrets_vault_store" {
  yaml_body  = <<-EOF
    apiVersion: external-secrets.io/v1alpha1
    kind: ClusterSecretStore
    metadata:
      name: cluster-store
    spec:
      ... contents of the ClusterSecretStore omitted...
    EOF
}

```

### The limitations of the kubernetes_manifest resource


If you want to create arbitrary Kubernetes resources in a cluster using Terraform, particularly CRDs (Custom Resource Definitions) you can use the kubernetes_manifest resource from the Kubernetes provider.

For example, imagine you are creating a ClusterSecretStore as part of deploying and setting up external-secrets-operator into a cluster. Since the Kubernetes provider doesnt know about the ClusterSecretStore resource, your only option is to use its kubernetes_manifest as in:

```
resource "kubernetes_manifest" "external_secrets_cluster_store" {
  manifest = yamldecode(<<-EOF
    apiVersion: external-secrets.io/v1alpha1
    kind: ClusterSecretStore
    metadata:
      name: cluster-store
    spec:
      provider:
        azurekv:          
          tenantId: "${from some tf output}"          
          vaultUrl: "${from some tf output}"
          authSecretRef:
            clientId:
              name: external-secrets-vault-credentials
              namespace: external-secrets
              key: ClientID
            clientSecret:
              name: external-secrets-vault-credentials
              namespace: external-secrets
              key: ClientSecret
    EOF
  )
}
```

The contents of the ClusterSecretStore aren’t important. What’s important is that we want to create the Kubernetes objects described by an arbitrary YAML manifest.

This technically works. However you will face these 2 major limitations:

It requires access to the cluster API during the planning phase, as per its official docs.

For example, this prevents you from using this resource while provisioning and configuring a cluster. Instead you need to break your terraform workflow into 2 separated terraform apply steps, first provision the cluster and once you have a working cluster then create the remaining resources

Any CRD (Custom Resource Definition) must already exist in the cluster during the planning phase, see various GitHub issues like this one.
In addition to having a working cluster before terraform apply, you also need to make sure the CRDs have already been installed in the cluster.
This isn’t great, particularly if (like me) you need to create some CRDs as part of the basic setup of the cluster done with terraform (before handing over control to other tools such as argocd).

What can you do instead? Well, there is a great alternative in the kubectl provider, which offers the kubectl_manifest to apply arbitrary YAML. Or you could leverage the helm_release resource of the helm Terraform provider.

Create arbitrary manifests using the kubectl provider
As it name suggests, the kubectl provider has been designed to apply YAML into a cluster. Even better, it doesn’t suffer from the same limitations than the kubernetes_manifest resource in the official kubernetes provider.

Once registering the provider, switching from the kubernetes_manifest to the kubectl_manifest is a straightforward exercise:

```
resource "kubectl_manifest" "external_secrets_cluster_store" {
  yaml_body  = <<-EOF
    apiVersion: external-secrets.io/v1alpha1
    kind: ClusterSecretStore
    metadata:
      name: cluster-store
    spec:
      provider:
        azurekv:
          tenantId: "${from some tf output}"
          vaultUrl: "${from some tf output}"
          authSecretRef:
            clientId:
              name: external-secrets-vault-credentials
              namespace: external-secrets
              key: ClientID
            clientSecret:
              name: external-secrets-vault-credentials
              namespace: external-secrets
              key: ClientSecret
    EOF
}
```

This looks very similar to the starting point. We have just updated the resource type, and replaced the manifestparameter with yaml_body . Additionally, we don’t need to invokeyamldecode since the kubectl provider is designed to use YAML.

That’s it, now you can keep the creation of the cluster as well as the creation of any CRDs as part of a single terraform plan/applyworkflow!

Alternative — Create arbitrary manifests using the itscontained/raw chart
You could always create your own chart, whose output would be the resources you were trying to create with kubernetes_manifest. However, if you just have a single resource to create, the hassle of creating and maintaining a chart isn’t very appealing.

Wouldn’t it be great if you could create a chart on the fly? That’s exactly what the itscontained/raw helm chart allows you to do.

The same example above where I want to create a ClusterSecretStore could be rewritten as follows:

```
resource "helm_release" "external_secrets_cluster_store" {
  name       = "external-secrets-cluster-store"
  repository = "https://charts.itscontained.io"
  chart      = "raw"
  version    = "0.2.5"
values = [
    <<-EOF
    resources:
      - apiVersion: external-secrets.io/v1alpha1
        kind: ClusterSecretStore
        metadata:
          name: cluster-store
        spec:
          provider:
            azurekv:
              tenantId: "${from some tf output}"
              vaultUrl: "${from some tf output}"
              authSecretRef:
                clientId:
                  name: external-secrets-vault-credentials
                  namespace: external-secrets
                  key: ClientID
                clientSecret:
                  name: external-secrets-vault-credentials
                  namespace: external-secrets
                  key: ClientSecret
    EOF
  ]
}
```
You can use the itscontained/rawchart to create any Kubernetes resource, not just aClusterSecretStore. The resources parameter of the chart accepts a list of arbitrary objects.

Of course this isn’t entirely ideal either since we now have a helm release in the cluster where we just wanted to create some Kubernetes objects. For that reason I think the kubectl provider discussed in the previous section is the better alternative to the kubernetes_manifest .