# 🚀 Guia Rápido - Como Executar o Beauty Studio Localmente

Este guia simplificado vai te ajudar a colocar o projeto para rodar em sua máquina em poucos minutos!

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- ✅ **Node.js** (versão 18 ou superior) - [Baixar aqui](https://nodejs.org/)
- ✅ **Git** - [Baixar aqui](https://git-scm.com/)
- ✅ **MySQL** (ou usar TiDB Cloud gratuito)

## 🎯 Passo a Passo

### Passo 1️⃣: Clonar o Repositório

Abra o terminal/prompt de comando e execute:

```bash
git clone https://github.com/francirleyoliveira/beauty-studio.git
cd beauty-studio
```

✅ **Verificação**: Você deve estar dentro da pasta `beauty-studio`

---

### Passo 2️⃣: Instalar o pnpm

O pnpm é o gerenciador de pacotes usado neste projeto. Instale-o globalmente:

```bash
npm install -g pnpm
```

✅ **Verificação**: Execute `pnpm --version` e deve aparecer a versão instalada

---

### Passo 3️⃣: Instalar as Dependências

Dentro da pasta do projeto, execute:

```bash
pnpm install
```

⏱️ **Aguarde**: Este processo pode levar alguns minutos na primeira vez.

✅ **Verificação**: Você verá uma mensagem de sucesso e a pasta `node_modules` será criada

---

### Passo 4️⃣: Configurar o Banco de Dados

#### Opção A: MySQL Local (Recomendado para Desenvolvimento)

**1. Instalar MySQL:**

- **Windows**: Baixe em [mysql.com/downloads](https://dev.mysql.com/downloads/installer/)
- **macOS**: `brew install mysql && brew services start mysql`
- **Linux**: `sudo apt-get install mysql-server && sudo systemctl start mysql`

**2. Criar o banco de dados:**

Abra o MySQL e execute:

```sql
CREATE DATABASE beauty_studio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'beauty_user'@'localhost' IDENTIFIED BY 'beauty123';
GRANT ALL PRIVILEGES ON beauty_studio.* TO 'beauty_user'@'localhost';
FLUSH PRIVILEGES;
```

#### Opção B: TiDB Cloud (Gratuito, sem instalação)

1. Acesse [tidbcloud.com](https://tidbcloud.com/) e crie uma conta gratuita
2. Crie um novo cluster (tier gratuito)
3. Copie a string de conexão fornecida

✅ **Verificação**: Você tem a string de conexão do banco de dados

---

### Passo 5️⃣: Configurar Variáveis de Ambiente

**1. Criar arquivo `.env`:**

Na raiz do projeto, crie um arquivo chamado `.env` (sem extensão antes do ponto)

**2. Adicionar as configurações:**

Copie e cole o conteúdo abaixo no arquivo `.env`:

```env
# ==========================================
# BANCO DE DADOS
# ==========================================
# Se usar MySQL local:
DATABASE_URL=mysql://beauty_user:beauty123@localhost:3306/beauty_studio

# Ou se usar TiDB Cloud, cole a string de conexão aqui:
# DATABASE_URL=mysql://sua_string_de_conexao_tidb

# ==========================================
# AUTENTICAÇÃO (use estes valores para teste)
# ==========================================
JWT_SECRET=beauty_studio_secret_key_2025_super_seguro
VITE_APP_ID=beauty-studio-local
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im

# ==========================================
# CONFIGURAÇÃO DO APP
# ==========================================
VITE_APP_TITLE=Beauty Studio
VITE_APP_LOGO=/images/logo.png

# ==========================================
# PROPRIETÁRIO (Opcional)
# ==========================================
OWNER_OPEN_ID=admin
OWNER_NAME=Administrador
```

💡 **Dica**: No Windows, use o Bloco de Notas. No macOS/Linux, use `nano .env` ou qualquer editor de texto.

✅ **Verificação**: O arquivo `.env` existe na raiz do projeto com as configurações acima

---

### Passo 6️⃣: Criar as Tabelas no Banco de Dados

Execute o comando para criar as tabelas automaticamente:

```bash
pnpm db:push
```

✅ **Verificação**: Você verá mensagens de sucesso indicando que as tabelas foram criadas

---

### Passo 7️⃣: Iniciar o Servidor de Desenvolvimento

Agora é só rodar:

```bash
pnpm dev
```

🎉 **Pronto!** O servidor vai iniciar e você verá algo assim:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

---

### Passo 8️⃣: Acessar o Site

Abra seu navegador e acesse:

```
http://localhost:3000
```

🌟 **Você verá a página inicial do Beauty Studio!**

---

## 🎨 Testando as Funcionalidades

### Navegação Básica

1. **Página Inicial**: `http://localhost:3000/`
2. **Serviços**: `http://localhost:3000/services`
3. **Profissionais**: `http://localhost:3000/professionals`
4. **Agendamento**: `http://localhost:3000/booking`

### Testando o Agendamento

1. Vá para a página de **Serviços**
2. Clique em **"Agendar"** em qualquer serviço
3. Você será redirecionado para o formulário com o serviço já selecionado ✨
4. Preencha os dados e teste o fluxo completo

---

## 🛑 Como Parar o Servidor

No terminal onde o servidor está rodando, pressione:

```
Ctrl + C
```

---

## 🔄 Comandos Úteis

### Reiniciar o servidor
```bash
# Parar com Ctrl+C e depois:
pnpm dev
```

### Limpar cache e reinstalar
```bash
rm -rf node_modules
pnpm install
```

### Atualizar o banco de dados após mudanças no schema
```bash
pnpm db:push
```

### Ver logs do banco de dados
```bash
# Conectar ao MySQL
mysql -u beauty_user -p beauty_studio

# Listar tabelas
SHOW TABLES;

# Ver dados de uma tabela
SELECT * FROM bookings;
```

---

## ❓ Problemas Comuns e Soluções

### ❌ Erro: "Cannot find module"

**Solução:**
```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### ❌ Erro: "Port 3000 is already in use"

**Solução 1** - Mudar a porta:
```bash
# Adicione no arquivo .env:
PORT=3001
```

**Solução 2** - Encontrar e matar o processo:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número_do_processo] /F

# macOS/Linux
lsof -i :3000
kill -9 [número_do_processo]
```

### ❌ Erro: "Access denied for user"

**Solução:** Verifique se:
1. O MySQL está rodando
2. O usuário e senha no `.env` estão corretos
3. O banco de dados foi criado

```bash
# Testar conexão
mysql -u beauty_user -p
# Digite a senha: beauty123
```

### ❌ Erro: "ENOENT: no such file or directory"

**Solução:** Certifique-se de estar na pasta correta:
```bash
pwd  # Deve mostrar: .../beauty-studio
ls   # Deve listar: client/, server/, package.json, etc.
```

### ❌ Página em branco ou erro 404

**Solução:**
1. Verifique se o servidor está rodando (terminal deve mostrar mensagens)
2. Acesse exatamente: `http://localhost:3000`
3. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)

---

## 📱 Testando em Dispositivos Móveis (Mesma Rede)

1. Encontre o IP da sua máquina:
   - **Windows**: `ipconfig` → procure por "IPv4"
   - **macOS/Linux**: `ifconfig` ou `ip addr` → procure por "inet"

2. No dispositivo móvel, acesse:
   ```
   http://[SEU_IP]:3000
   ```
   Exemplo: `http://192.168.1.100:3000`

---

## 🎓 Próximos Passos

Agora que o projeto está rodando:

1. ✅ Explore as páginas e funcionalidades
2. ✅ Personalize as cores em `client/src/index.css`
3. ✅ Adicione seus próprios serviços
4. ✅ Customize os profissionais
5. ✅ Teste o sistema de agendamento
6. ✅ Faça suas modificações e experimente!

---

## 📚 Documentação Adicional

- **README.md**: Visão geral completa do projeto
- **INSTALL.md**: Guia de instalação detalhado
- **Documentação oficial**: [GitHub Repository](https://github.com/francirleyoliveira/beauty-studio)

---

## 💡 Dicas de Desenvolvimento

### Hot Reload
O projeto usa Vite, então qualquer alteração nos arquivos será refletida automaticamente no navegador! Não precisa reiniciar o servidor.

### Estrutura de Arquivos
```
client/src/
├── pages/          ← Edite aqui para mudar as páginas
├── components/     ← Componentes reutilizáveis
└── index.css       ← Estilos globais e cores do tema

server/
├── routers.ts      ← Rotas da API
└── db.ts           ← Funções do banco de dados

drizzle/
└── schema.ts       ← Schema do banco de dados
```

### Editando Cores do Tema
Abra `client/src/index.css` e modifique as variáveis CSS:

```css
:root {
  --primary: 330 81% 60%;        /* Cor principal (rosa) */
  --secondary: 45 93% 58%;       /* Cor secundária (dourado) */
  --accent: 330 81% 95%;         /* Cor de destaque */
}
```

---

## 🆘 Precisa de Ajuda?

Se você seguiu todos os passos e ainda tem problemas:

1. 📧 **Email**: contato@beautystudio.com
2. 🐛 **GitHub Issues**: [Reportar problema](https://github.com/francirleyoliveira/beauty-studio/issues)
3. 📖 **Documentação**: Leia o INSTALL.md para mais detalhes

---

## ✅ Checklist de Sucesso

Marque conforme completa cada etapa:

- [ ] Node.js instalado e funcionando
- [ ] Repositório clonado
- [ ] pnpm instalado
- [ ] Dependências instaladas (`pnpm install`)
- [ ] MySQL instalado e rodando (ou TiDB configurado)
- [ ] Banco de dados criado
- [ ] Arquivo `.env` configurado
- [ ] Tabelas criadas (`pnpm db:push`)
- [ ] Servidor iniciado (`pnpm dev`)
- [ ] Site acessível em `http://localhost:3000`
- [ ] Todas as páginas funcionando
- [ ] Sistema de agendamento testado

---

🎉 **Parabéns!** Você conseguiu executar o Beauty Studio localmente!

Agora é só explorar, personalizar e desenvolver suas próprias funcionalidades.

**Bom desenvolvimento!** 💻✨

