FROM node:22-alpine3.21

WORKDIR /app

# Copiar e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar TODOS os arquivos do projeto
COPY . .

# Criar diretório para SQLite
RUN mkdir -p data

# Gerar cliente Prisma
RUN npx prisma generate

EXPOSE 4205

# Comando com caminho correto do seed
CMD ["sh", "-c", "npx prisma db push && ([ -f prisma/seed.js ] && node prisma/seed.js || echo 'Seed não encontrado, pulando...') && npm run start"]