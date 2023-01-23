

# Redis

```bash
docker run --name redis -d -p 6379:6379 redis

docker stop redis
docker start redis
```

# rabbitMQ

```bash
docker run -d --hostname my-rabbit --name rabbitmq -p 61613:61613 -p 5671:5671 -p 5672:5672 -p 15672:15672 rabbitmq

docker exec rabbitmq rabbitmq-plugins enable rabbitmq_management && docker exec rabbitmq rabbitmq-plugins enable rabbitmq_stomp

docker stop rabbitmq

docker start rabbitmq
```

# postgis

```bash
docker run --name postgis -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgis/postgis

---

CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS         PORTS                                       NAMES
ec3c82bce1a7   postgis/postgis   "docker-entrypoint.s…"   14 seconds ago   Up 5 seconds   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp   postgis

---

docker stop postgis
docker start postgis
```

```jsx
docker network inspect network_name
```

 u will find all the containers link to the network in the Containers object field

```jsx
docker build . -f Dockerfile.dev --tag todo-api:1.0
```