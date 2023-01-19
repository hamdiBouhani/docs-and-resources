Notes: Port Forward
Use this command in order to access Argo CD on your local machine on port 8080

kubectl port-forward svc/argocd-server -n argocd 8080:443



open browser https://localhost:8080/