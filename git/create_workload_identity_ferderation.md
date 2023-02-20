# How does the GCP Workload Identity Federation work with Github Provider

```
gcloud iam service-accounts create github-actions-sa \
    --description="github auctions service account" \
    --display-name="github auctions"

gcloud projects add-iam-policy-binding zeta-cortex-294608 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding dealroom-containers \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding rational-oasis-298110 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/secretmanager.admin"

gcloud projects add-iam-policy-binding helical-arcade-298110 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/secretmanager.admin"

gcloud projects add-iam-policy-binding zeta-cortex-294608 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountAdmin"

gcloud projects add-iam-policy-binding round-dispatch-294623 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountAdmin"

gcloud projects add-iam-policy-binding coastal-dynamo-293322    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com"     --role="roles/redis.admin"

gcloud projects add-iam-policy-binding zeta-cortex-294608 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/dns.admin"

gcloud projects add-iam-policy-binding coastal-dynamo-293322 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/dns.admin"


gcloud projects add-iam-policy-binding round-dispatch-294623 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/cloudsql.admin"


gcloud projects add-iam-policy-binding optimum-unicorn-e93750a50007     --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com"     --role="roles/iam.serviceAccountUser"


gcloud projects add-iam-policy-binding optimum-unicorn-e93750a50007    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com"     --role="roles/storage.admin"



gcloud projects add-iam-policy-binding zeta-cortex-294608 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/container.admin"

gcloud projects add-iam-policy-binding zeta-cortex-294608 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"


gcloud projects add-iam-policy-binding round-dispatch-294623 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/cloudsql.client"

    gcloud projects add-iam-policy-binding round-dispatch-294623 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/dns.managed*"

gcloud projects add-iam-policy-binding black-burner-297510 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/container.clusterViewer"

gcloud projects add-iam-policy-binding rational-oasis-298110 \
    --member="serviceAccount:github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
    --role="roles/cloudkms.cryptoKeyEncrypterDecrypter"
```



| project | roles               |
|   ---   |  ---                |
| round-dispatch-294623   |  Cloud SQL Admin, DNS Administrator, Project IAM Admin, Service Account Admin  |
|   zeta-cortex-294608   |  Cloud Memorystore Redis Admin, DNS Administrator, Kubernetes Engine Admin, Secret Manager Admin, Service Account Admin, Service Account User, Storage Admin, Kubernetes Engine Cluster Admin, Compute Network Admin               |
|   optimum-unicorn-e93750a50007   |  Cloud Asset Viewer, Cloud Functions Admin, Cloud KMS Admin, Cloud SQL Admin, Compute Load Balancer Admin, Kubernetes Engine Admin, Project IAM Admin, Service Account Admin, Service Account Key Admin, Storage Admin              |
|   ---   |  ---                |
|   ---   |  ---                |
|   ---   |  ---                |



|   ---   |
round-dispatch-294623| 
|   ---   |
| Cloud Composer API Service Agent| 
| Compute Admin| 
| Compute Network Admin| 
| Compute Security Admin| 
| Create Service Accounts| 
| Delete Service Accounts| 
| DNS Administrator| 
| Kubernetes Engine Service Agent| 
| Project Billing Manager| 
| Project IAM Admin| 
| Security Admin| 
|   ---   |




```
 $  gcloud iam workload-identity-pools create github-dealroom-core-infra-pool --location="global" --project zeta-cortex-294608

 >>> Created workload identity pool [github-dealroom-core-infra-pool].

 $  gcloud iam workload-identity-pools providers create-oidc "github-provider" \
  --project="zeta-cortex-294608" \
  --location="global" \
  --workload-identity-pool="github-dealroom-core-infra-pool" \
  --display-name="github ci provider" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.aud=assertion.aud" \
  --issuer-uri="https://token.actions.githubusercontent.com"

 >>> Created workload identity pool provider [github-provider].

 
 $  gcloud iam service-accounts add-iam-policy-binding "github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com" \
  --project="zeta-cortex-294608" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/541099083396/locations/global/workloadIdentityPools/github-dealroom-core-infra-pool/attribute.repository/dealroom/core-infra"


>>> Updated IAM policy for serviceAccount [github-actions-sa@zeta-cortex-294608.iam.gserviceaccount.com].
bindings:
- members:
  - principalSet://iam.googleapis.com/projects/541099083396/locations/global/workloadIdentityPools/github-dealroom-core-infra-pool/attribute.repository/dealroom/core-infra
  role: roles/iam.workloadIdentityUser
etag: BwX00i1yn0s=
version: 1



```