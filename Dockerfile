FROM node:22-alpine3.21

WORKDIR /app

# Copiar e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar TODOS os arquivos do projeto
COPY . .

# Criar diretório para SQLite
RUN mkdir -p data

# Copiar e dar permissão ao script
COPY start.sh ./
RUN chmod +x start.sh

# Gerar cliente Prisma
RUN npx prisma generate

EXPOSE 4205

# Usar o script personalizado
CMD ["./start.sh"]