# Criando a imagem do Frontend

## Criando o Dockerfile

    # Usar a imagem base do Nginx
    FROM nginx:alpine

    # Copiar todos os arquivos do diretório atual para o Nginx
    COPY . /usr/share/nginx/html/

    # Expor a porta 80
    EXPOSE 80

## Construir

```bash
docker build -t frontend .
```

## Executar

```bash
docker run -d -p 8080:80 frontend
```

## Acessar a Página
Abra seu navegador em http://localhost:8080 para ver sua página HTML, com CSS e JavaScript incluídos.