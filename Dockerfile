# Imagem base oficial do Node.js
FROM node:22-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração primeiro
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Comando padrão ao iniciar o container
CMD ["npm", "run", "dev"]
