# MONGO

Verifique o Serviço MongoDB

docker run --name mongo -d -p 27017:27017 mongo

Verifique a Configuração de Conexão

mongoose.connect('mongodb://mongo:27017/horadoqa-prod', { useNewUrlParser: true, useUnifiedTopology: true });

Acessando o Mongo

```bash
kubectl exec -it mongo-76f46d696c-6mlwd -- mongo

kubectl exec -it mongo-76f46d696c-6mlwd -- ls /usr/bin
```

Use um Contêiner MongoDB Interativo

Se você precisar do cliente MongoDB para fazer consultas diretamente, uma alternativa é executar um contêiner MongoDB separado com o cliente. Você pode fazer isso com o seguinte comando:

kubectl run -it --rm mongo-client --image=mongo -- bash
