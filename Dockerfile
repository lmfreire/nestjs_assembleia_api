#Imagem Base
FROM node:20

#Diretorio onde ficara a aplicacao
WORKDIR /app

#Copia a pasta do codigo fonte 
COPY . .

#Rodar um comando
RUN npm install

#Rodar um comando
RUN npm run build

CMD ["node","dist/main.js"]