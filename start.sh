#!/bin/sh

echo "=== Iniciando aplicação Lumina V2 ==="

# Verificar se o banco existe
if [ ! -f "/app/data/lumina_v2.db" ]; then
    echo "Banco não encontrado. Criando novo banco..."
    echo "Executando prisma db push..."
    npx prisma db push
    
    echo "Executando seed..."
    npx prisma db seed || echo "Seed falhou, mas continuando..."
else
    echo "Banco encontrado. Sincronizando schema..."
    npx prisma db push
fi

# Verificar se o arquivo servidor existe
if [ -f "/app/src/server.js" ]; then
    echo "Iniciando servidor..."
    npm start
else
    echo "ERRO: Arquivo server.js não encontrado!"
    ls -la /app/src/
    exit 1
fi