cd $ISTIO_HOME
kubectl apply -f ${ISTIO_HOME}/samples/bookinfo/networking/bookinfo-gateway.yaml

export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "Update your local DNS with the public Ingress IP"
echo "sudo vi /etc/hosts"
echo "${INGRESS_HOST} bookinfo.istio-cluster.org"
echo "${INGRESS_HOST} kiali.istio-cluster.org"
echo "${INGRESS_HOST} grafana.istio-cluster.org"
echo "${INGRESS_HOST} tracing.istio-cluster.org"
echo "${INGRESS_HOST} control.travel-control.istio-cluster.org"

echo "Open http://bookinfo.istio-cluster.org/productpage"