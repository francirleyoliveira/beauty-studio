# Guia de Instalação - Beauty Studio

Este guia fornece instruções detalhadas para instalar e configurar o Beauty Studio em diferentes ambientes.

## 📋 Requisitos do Sistema

### Requisitos Mínimos

- **Node.js**: versão 18.0.0 ou superior
- **pnpm**: versão 8.0.0 ou superior
- **Banco de Dados**: MySQL 8.0+ ou TiDB
- **Memória RAM**: 2GB mínimo
- **Espaço em Disco**: 500MB para o projeto + dependências

### Requisitos Recomendados

- **Node.js**: versão 20.0.0 ou superior
- **pnpm**: versão 9.0.0 ou superior
- **Memória RAM**: 4GB ou mais
- **Processador**: 2+ cores

## 🔧 Instalação Passo a Passo

### 1. Instalar Node.js

#### Windows
1. Baixe o instalador em [nodejs.org](https://nodejs.org/)
2. Execute o instalador e siga as instruções
3. Verifique a instalação:
```bash
node --version
npm --version
```

#### macOS
```bash
# Usando Homebrew
brew install node

# Ou baixe o instalador em nodejs.org
```

#### Linux (Ubuntu/Debian)
```bash
# Usando NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalação
node --version
npm --version
```

### 2. Instalar pnpm

```bash
# Via npm
npm install -g pnpm

# Ou via script
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Verificar instalação
pnpm --version
```

### 3. Clonar o Repositório

```bash
# Via HTTPS
git clone https://github.com/francirleyoliveira/beauty-studio.git

# Ou via SSH
git clone git@github.com:francirleyoliveira/beauty-studio.git

# Entrar no diretório
cd beauty-studio
```

### 4. Instalar Dependências

```bash
# Instalar todas as dependências do projeto
pnpm install

# Isso pode levar alguns minutos na primeira vez
```

### 5. Configurar Banco de Dados

#### Opção A: MySQL Local

1. Instalar MySQL:

**Windows**: Baixe o instalador em [mysql.com](https://dev.mysql.com/downloads/installer/)

**macOS**:
```bash
brew install mysql
brew services start mysql
```

**Linux (Ubuntu/Debian)**:
```bash
sudo apt-get update
sudo apt-get install mysql-server
sudo systemctl start mysql
```

2. Criar banco de dados:
```sql
CREATE DATABASE beauty_studio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'beauty_user'@'localhost' IDENTIFIED BY 'sua_senha_segura';
GRANT ALL PRIVILEGES ON beauty_studio.* TO 'beauty_user'@'localhost';
FLUSH PRIVILEGES;
```

3. String de conexão:
```
mysql://beauty_user:sua_senha_segura@localhost:3306/beauty_studio
```

#### Opção B: TiDB Cloud (Recomendado para Produção)

1. Crie uma conta em [tidbcloud.com](https://tidbcloud.com/)
2. Crie um novo cluster
3. Copie a string de conexão fornecida
4. Use a string de conexão no arquivo `.env`

### 6. Configurar Variáveis de Ambiente

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com suas configurações:

```env
# ======================
# DATABASE
# ======================
DATABASE_URL=mysql://beauty_user:sua_senha@localhost:3306/beauty_studio

# ======================
# AUTHENTICATION
# ======================
# Gere um secret JWT seguro (pode usar: openssl rand -base64 32)
JWT_SECRET=seu_jwt_secret_super_seguro_aqui

# IDs do OAuth (obtenha em https://manus.im)
VITE_APP_ID=seu_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im

# ======================
# APP CONFIGURATION
# ======================
VITE_APP_TITLE=Beauty Studio
VITE_APP_LOGO=/images/logo.png

# ======================
# OWNER (Opcional)
# ======================
OWNER_OPEN_ID=seu_owner_id
OWNER_NAME=Nome do Proprietário

# ======================
# BUILT-IN SERVICES (Opcional)
# ======================
BUILT_IN_FORGE_API_URL=https://forge.manus.im
BUILT_IN_FORGE_API_KEY=sua_api_key

# ======================
# ANALYTICS (Opcional)
# ======================
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=seu_website_id
```

### 7. Executar Migrações do Banco de Dados

```bash
# Criar/atualizar as tabelas no banco de dados
pnpm db:push

# Verificar se as tabelas foram criadas
# Conecte-se ao MySQL e execute:
# USE beauty_studio;
# SHOW TABLES;
```

### 8. Popular Dados Iniciais (Opcional)

Você pode criar um script para popular o banco com dados de exemplo:

```bash
# Criar arquivo de seed
touch server/seed.ts
```

Exemplo de seed:
```typescript
import { db } from "./db";
import { services, professionals } from "../drizzle/schema";

async function seed() {
  // Inserir serviços
  await db.insert(services).values([
    {
      id: "1",
      name: "Corte Feminino",
      category: "Cabelo",
      duration: "45 min",
      price: "R$ 80,00",
      description: "Corte personalizado de acordo com seu estilo"
    },
    // ... mais serviços
  ]);

  // Inserir profissionais
  await db.insert(professionals).values([
    {
      id: "1",
      name: "Ana Silva",
      role: "Cabeleireira Sênior",
      specialty: "Cortes e Coloração",
      rating: 4.9
    },
    // ... mais profissionais
  ]);
}

seed().then(() => {
  console.log("✓ Dados iniciais inseridos com sucesso!");
  process.exit(0);
}).catch((error) => {
  console.error("✗ Erro ao inserir dados:", error);
  process.exit(1);
});
```

Execute o seed:
```bash
pnpm tsx server/seed.ts
```

### 9. Iniciar o Servidor de Desenvolvimento

```bash
# Iniciar em modo de desenvolvimento
pnpm dev

# O servidor estará disponível em:
# Frontend: http://localhost:3000
# Backend: http://localhost:3000/api
```

### 10. Verificar a Instalação

Abra o navegador e acesse:
- `http://localhost:3000` - Página inicial
- `http://localhost:3000/services` - Página de serviços
- `http://localhost:3000/professionals` - Página de profissionais
- `http://localhost:3000/booking` - Página de agendamento

## 🚀 Build para Produção

### 1. Criar Build de Produção

```bash
# Gerar build otimizado
pnpm build

# Os arquivos serão gerados em:
# - client/dist/ (frontend)
# - server/ (backend já está pronto)
```

### 2. Testar Build Localmente

```bash
# Iniciar servidor de produção
pnpm start

# Acesse http://localhost:3000
```

### 3. Variáveis de Ambiente para Produção

Certifique-se de configurar as variáveis de ambiente no servidor de produção:

```env
NODE_ENV=production
DATABASE_URL=sua_connection_string_producao
JWT_SECRET=seu_jwt_secret_producao
# ... outras variáveis
```

## 🐳 Instalação com Docker (Opcional)

### 1. Criar Dockerfile

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm build

# Imagem de produção
FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/drizzle ./drizzle
COPY --from=builder /app/shared ./shared

EXPOSE 3000

CMD ["pnpm", "start"]
```

### 2. Criar docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mysql://root:password@db:3306/beauty_studio
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=password
      - MYSQL_DATABASE=beauty_studio
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"
    restart: unless-stopped

volumes:
  mysql_data:
```

### 3. Executar com Docker

```bash
# Build e iniciar containers
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar containers
docker-compose down
```

## 🔧 Solução de Problemas

### Erro: "Cannot find module"

```bash
# Limpar cache e reinstalar
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Erro de Conexão com Banco de Dados

1. Verifique se o MySQL está rodando:
```bash
# Linux/macOS
sudo systemctl status mysql

# Windows
# Verifique no Gerenciador de Serviços
```

2. Teste a conexão:
```bash
mysql -u beauty_user -p -h localhost beauty_studio
```

3. Verifique a string de conexão no `.env`

### Porta 3000 já em uso

```bash
# Encontrar processo usando a porta
# Linux/macOS
lsof -i :3000

# Windows
netstat -ano | findstr :3000

# Matar o processo ou usar outra porta
# Adicione no .env:
PORT=3001
```

### Erro de Permissão no Linux/macOS

```bash
# Dar permissão de execução aos scripts
chmod +x node_modules/.bin/*

# Ou use sudo (não recomendado)
sudo pnpm install
```

## 📚 Próximos Passos

Após a instalação bem-sucedida:

1. ✅ Personalize o tema e cores em `client/src/index.css`
2. ✅ Adicione seus serviços no banco de dados
3. ✅ Configure os profissionais da equipe
4. ✅ Teste o sistema de agendamento
5. ✅ Configure o sistema de autenticação
6. ✅ Faça deploy em produção

## 💡 Dicas

- Use `pnpm dev` durante o desenvolvimento para hot-reload automático
- Execute `pnpm db:push` sempre que alterar o schema do banco
- Mantenha o `.env` fora do controle de versão (já está no `.gitignore`)
- Use variáveis de ambiente diferentes para desenvolvimento e produção
- Faça backup regular do banco de dados

## 🆘 Suporte

Se encontrar problemas durante a instalação:

1. Verifique a [documentação oficial](https://github.com/francirleyoliveira/beauty-studio)
2. Abra uma [issue no GitHub](https://github.com/francirleyoliveira/beauty-studio/issues)
3. Entre em contato: contato@beautystudio.com

---

✨ Instalação concluída! Agora você está pronto para usar o Beauty Studio.

