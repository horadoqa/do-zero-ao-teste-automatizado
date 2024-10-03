# SERVER

```bash
docker run -p 5000:5000 horadoqa/be-horadoqa:v1.0.0

Servidor rodando na porta 5000
```

## Teste a Conexão Internamente

kubectl run --rm -it --restart=Never --image=alpine debug -- /bin/sh

##  Instala o curl, se necessário

```bash
apk add --no-cache curl   

curl http://10.43.251.211:5000/api/users
```
