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

# Comando com verificação do seed
CMD ["sh", "-c", "npx prisma db push && ([ -f prisma/seed/seed.js ] && node prisma/seed/seed.js || echo 'Seed não encontrado, pulando...') && npm run start"]