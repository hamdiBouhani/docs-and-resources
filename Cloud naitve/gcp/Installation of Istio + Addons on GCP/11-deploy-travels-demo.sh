kubectl create namespace travel-agency
kubectl create namespace travel-portal
kubectl create namespace travel-control

kubectl label namespace travel-agency istio-injection=enabled
kubectl label namespace travel-portal istio-injection=enabled

kubectl apply -f <(curl -L https://raw.githubusercontent.com/kiali/demos/master/travels/travel_agency.yaml) -n travel-agency
kubectl apply -f <(curl -L https://raw.githubusercontent.com/kiali/demos/master/travels/travel_portal.yaml) -n travel-portal
kubectl apply -f <(curl -L https://raw.githubusercontent.com/kiali/demos/master/travels/travel_control.yaml) -n travel-control

while [[ $(kubectl get pods -l app=control -n travel-control -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]
do
        echo "waiting for control pod"
        kubectl get pods -n travel-control
        sleep 15
done

while [[ $(kubectl get pods -l app=voyages -n travel-portal -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]
do
        echo "waiting for voyages pod"
        kubectl get pods -n travel-portal
        sleep 15
done

while [[ $(kubectl get pods -l app=mysqldb -n travel-agency -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]
do
        echo "waiting for mysqldb pod"
        kubectl get pods -n travel-agency
        sleep 15
done