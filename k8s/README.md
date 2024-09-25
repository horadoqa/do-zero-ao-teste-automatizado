# K8S

## Instalando o K3D

```bash
wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```

## Criando o cluster

```bash
k3d cluster create horadoqa
```

Criando o namespace

```bash
kubectl create namespace horadoqa
```

## be

```bash
kubectl apply -f deployment.yaml 

deployment.apps/be-horadoqa created
service/be-horadoqa created
```

## fe

```bash
kubectl apply -f deployment.yaml

deployment.apps/fe-horadoqa created
service/fe-horadoqa created
```

## mongodb

```bash
kubectl apply -f deployment.yaml

```

## Verificar os pods

```bash
kubectl get pods

NAME                           READY   STATUS    RESTARTS   AGE
be-horadoqa-6956fcb5cc-zgjg4   1/1     Running   0          2m29s
fe-horadoqa-6b6dffd7d7-k4khc   1/1     Running   0          2m38s
mongo-76f46d696c-28pfq         1/1     Running   0          2m23s
```

## Verifique Logs do Frontend:

```bash
kubectl logs be-horadoqa-6956fcb5cc-f4f67 --namespace horadoqa

Servidor rodando na porta 5000
Conectado ao MongoDB
```

## Verificar o Service

```bash
kubectl get services

NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
be-horadoqa   ClusterIP   10.43.125.62    <none>        5000/TCP       99s
fe-horadoqa   NodePort    10.43.104.68    <none>        80:30000/TCP   108s
mongo         ClusterIP   10.43.193.105   <none>        27017/TCP      93s
```

## Verificar os deployments

```bash
kubectl get deployments

NAME          READY   UP-TO-DATE   AVAILABLE   AGE
be-horadoqa   1/1     1            1           2m8s
fe-horadoqa   1/1     1            1           2m17s
mongo         1/1     1            1           2m2s
```

## Listar Containers do Docker

```bash
docker ps

CONTAINER ID   IMAGE                            COMMAND                  CREATED         STATUS         PORTS                             NAMES
bba5d5f59dc9   ghcr.io/k3d-io/k3d-tools:5.7.4   "/app/k3d-tools noop"    4 minutes ago   Up 4 minutes                                     k3d-horadoqa-tools
0f2f3a288ed0   ghcr.io/k3d-io/k3d-proxy:5.7.4   "/bin/sh -c nginx-pr…"   4 minutes ago   Up 4 minutes   80/tcp, 0.0.0.0:36827->6443/tcp   k3d-horadoqa-serverlb
39041a0f4794   rancher/k3s:v1.30.4-k3s1         "/bin/k3d-entrypoint…"   4 minutes ago   Up 4 minutes                                     k3d-horadoqa-server-0
```

## Inspecionar o Container

```bash
docker inspect 39041a0f4794
```

## Obter o IP do Nó Docker

Procurar por NetworkSettings

```bash
docker inspect --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 39041a0f4794

172.18.0.3
```

Isso deve retornar o IP do container na rede.

## Acessar a página

http://localhost:8080


## Editar um deployment

kubectl get deployments                                                 
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
be-horadoqa   1/1     1            1           81m
fe-horadoqa   1/1     1            1           39m
mongo         1/1     1            1           81m


## Editar o deployment

```bash
kubectl edit deployment fe-horadoqa --namespace horadoqa
```

## Acessar o site

kubectl port-forward pod/fe-horadoqa-6b6dffd7d7-tq8nv --namespace horadoqa 30000:80


http://localhost:30000/