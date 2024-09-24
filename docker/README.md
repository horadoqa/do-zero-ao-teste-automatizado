# BE

## Firewall

Verifique se há algum firewall bloqueando a porta 27017. Você pode usar o ufw (se estiver disponível) para permitir o tráfego nessa porta:

```bash
sudo ufw allow 27017
```

## Instale o Node.js e MongoDB:

Certifique-se de que você tenha o Node.js e o MongoDB instalados em sua máquina.

MongoDB

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb.gpg
```

## Listar as chaves públicas

```bash
apt-key list
```

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

## Atualizar pacotes do Ubuntu

```bash
sudo apt update
```

## Instalar o mongoDB

```bash
sudo apt-get install -y mongodb-mongosh
```

```bash
node --version
v20.17.0

mongosh --version
2.3.1

mongod --version
db version v6.0.17
```

## Verificando serviços

```bash
sudo systemctl start mongosh
sudo systemctl enable mongosh
sudo systemctl status mongosh
```

## Crie um novo projeto Node.js:

```bash
mkdir be
cd be
npm init -y
```

## Estrutura do Projeto: Crie os seguintes arquivos e pastas:

    be/
    ├── server.js
    └── models/
        └── User.js


## Códigos

Configuração do Mongoose está no arquivo: [models/User.js](./be/models/User.js) 

Criação do Servidor Express [server.js](./be/server.js) 

Configure seu servidor para aceitar requisições

Altere seu formulário HTML para fazer uma requisição para o backend [JavaScript](./fe/js/script.js)

## Executar o mongoDB

```bash
mongosh

Current Mongosh Log ID: 66f28fcb0c5c127a43964032
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
```

## Instalação das dependências

```bash
npm install express mongoose body-parser cors
```

## Executando o Projeto

Inicie o servidor Node.js:

```bash
node server.js
```

## Acessar o MongoDB

```bash
mongosh
```

## Listar os bancos

    test> show databases
    admin          40.00 KiB
    config        108.00 KiB
    horadoqa      108.00 KiB
    horadoqa-dev  108.00 KiB
    local          40.00 KiB

## Selecionar a tabela

    use horadoqa-dev
    already on db horadoqa-dev

## Listar as tabelas

    test> show tables
    users

    test> show collections
    users

## Query no banco para ver os registros

    test> db.users.find().pretty()

## Testar a API

```bash
curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{"name":"Maria","email":"maria@example.com","phone":"123456789","country":"Brasil","framework":"Cypress","comments":"Gostei muito!"}'
```