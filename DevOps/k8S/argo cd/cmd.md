Notes: Port Forward
Use this command in order to access Argo CD on your local machine on port 8080

kubectl port-forward svc/argocd-server -n argocd 8080:443



open browser https://localhost:8080/


Notes: CLI
Make sure that ArgoCD server endpoint is accessible whether using port-forward or ingress or load balancer service.

example: kubectl port-forward svc/argocd-server -n argocd 8080:443

Remember to login into  ArgoCD using command argocd login.

you need admin user and password. remember that you can get the initial admin password from k8s secret "argocd-initial-admin-secret"


example : argocd login localhost:8080 --insecure

Then you can apply cli commands.