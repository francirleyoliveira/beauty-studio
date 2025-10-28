# Beauty Studio 💅

Site completo e profissional para estúdio de beleza com sistema de agendamento online, desenvolvido com tecnologias modernas e design elegante.

![Beauty Studio](https://img.shields.io/badge/Status-Produção-success)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![tRPC](https://img.shields.io/badge/tRPC-11-blue)

## 🎯 Sobre o Projeto

O Beauty Studio é uma solução completa para estúdios de beleza que desejam oferecer uma experiência digital moderna aos seus clientes. O site apresenta os serviços oferecidos, a equipe de profissionais e permite que os clientes façam agendamentos online de forma simples e intuitiva.

## ✨ Funcionalidades

### 📱 Páginas Principais

- **Página Inicial**: Hero section atraente com apresentação dos serviços e call-to-action
- **Serviços**: Catálogo completo organizado por categorias (Cabelo, Maquiagem, Estética, Unhas, Sobrancelhas, Depilação)
- **Profissionais**: Apresentação da equipe com fotos, especialidades e avaliações
- **Agendamento Online**: Sistema completo de reserva de horários em 3 etapas

### 🎨 Design e UX

- Design elegante com paleta de cores em tons de rosa e dourado
- Layout responsivo que funciona perfeitamente em desktop, tablet e mobile
- Animações suaves e transições elegantes
- Componentes modernos usando shadcn/ui
- Tipografia profissional e hierarquia visual clara

### 🚀 Sistema de Agendamento

- **Etapa 1**: Seleção de serviço e profissional
- **Etapa 2**: Escolha de data e horário
- **Etapa 3**: Preenchimento de dados de contato
- **Pré-seleção inteligente**: Quando o cliente clica em "Agendar" em um serviço específico, ele já vem pré-selecionado no formulário
- Validação de formulário em tempo real
- Confirmação visual do agendamento

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Tailwind CSS 4**: Framework CSS utility-first para estilização
- **shadcn/ui**: Componentes de UI modernos e acessíveis
- **Wouter**: Roteamento leve para React
- **tRPC Client**: Cliente type-safe para comunicação com o backend

### Backend

- **Node.js**: Runtime JavaScript
- **Express 4**: Framework web para Node.js
- **tRPC 11**: Framework RPC type-safe end-to-end
- **Drizzle ORM**: ORM TypeScript-first para bancos de dados SQL
- **MySQL/TiDB**: Banco de dados relacional

### Autenticação

- **Manus OAuth**: Sistema de autenticação integrado
- **JWT**: Tokens seguros para sessões de usuário

### Ferramentas de Desenvolvimento

- **Vite**: Build tool e dev server extremamente rápido
- **ESLint**: Linter para identificar problemas no código
- **Prettier**: Formatador de código
- **pnpm**: Gerenciador de pacotes eficiente

## 📦 Estrutura do Projeto

```
beauty-studio/
├── client/                 # Frontend React
│   ├── public/            # Arquivos estáticos
│   │   └── images/        # Imagens do site
│   └── src/
│       ├── components/    # Componentes reutilizáveis
│       │   └── ui/        # Componentes shadcn/ui
│       ├── contexts/      # Contextos React
│       ├── hooks/         # Custom hooks
│       ├── lib/           # Bibliotecas e utilitários
│       ├── pages/         # Páginas da aplicação
│       │   ├── Home.tsx
│       │   ├── Services.tsx
│       │   ├── Professionals.tsx
│       │   └── Booking.tsx
│       ├── App.tsx        # Configuração de rotas
│       ├── main.tsx       # Ponto de entrada
│       └── index.css      # Estilos globais
├── server/                # Backend Node.js
│   ├── _core/            # Configurações do framework
│   ├── db.ts             # Funções de banco de dados
│   └── routers.ts        # Rotas tRPC
├── drizzle/              # Schema e migrações do banco
│   └── schema.ts         # Definição das tabelas
├── shared/               # Código compartilhado
└── storage/              # Helpers para S3
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)
- Banco de dados MySQL ou TiDB configurado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/francirleyoliveira/beauty-studio.git
cd beauty-studio
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# Authentication
JWT_SECRET=seu_secret_jwt_aqui
VITE_APP_ID=seu_app_id_aqui
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im

# App Configuration
VITE_APP_TITLE=Beauty Studio
VITE_APP_LOGO=/images/logo.png

# Owner (opcional)
OWNER_OPEN_ID=seu_owner_id
OWNER_NAME=Seu Nome
```

4. Execute as migrações do banco de dados:
```bash
pnpm db:push
```

5. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

## 📊 Banco de Dados

### Tabelas Principais

- **users**: Usuários do sistema (clientes e administradores)
- **services**: Catálogo de serviços oferecidos
- **professionals**: Profissionais do estúdio
- **bookings**: Agendamentos realizados pelos clientes

### Schema

```typescript
// Exemplo da tabela de agendamentos
export const bookings = mysqlTable("bookings", {
  id: varchar("id", { length: 64 }).primaryKey(),
  serviceId: varchar("serviceId", { length: 64 }).notNull(),
  professionalId: varchar("professionalId", { length: 64 }).notNull(),
  customerName: varchar("customerName", { length: 255 }).notNull(),
  customerEmail: varchar("customerEmail", { length: 320 }).notNull(),
  customerPhone: varchar("customerPhone", { length: 20 }).notNull(),
  date: varchar("date", { length: 10 }).notNull(),
  time: varchar("time", { length: 5 }).notNull(),
  notes: text("notes"),
  status: mysqlEnum("status", ["pending", "confirmed", "cancelled"]).default("pending"),
  createdAt: timestamp("createdAt").defaultNow(),
});
```

## 🎨 Personalização

### Cores e Tema

As cores do tema podem ser personalizadas no arquivo `client/src/index.css`:

```css
:root {
  --primary: 330 81% 60%;        /* Rosa principal */
  --primary-foreground: 0 0% 100%;
  --secondary: 45 93% 58%;       /* Dourado */
  --accent: 330 81% 95%;         /* Rosa claro */
  /* ... outras variáveis */
}
```

### Serviços

Os serviços podem ser gerenciados através do banco de dados ou diretamente no código (para versão estática) em `client/src/pages/Services.tsx`.

### Profissionais

A equipe de profissionais pode ser atualizada em `client/src/pages/Professionals.tsx` ou através do banco de dados.

## 🔒 Segurança

- Autenticação via OAuth com JWT
- Validação de dados no frontend e backend
- Proteção contra SQL injection usando Drizzle ORM
- Sanitização de inputs do usuário
- HTTPS obrigatório em produção

## 📈 Performance

- Code splitting automático com Vite
- Lazy loading de imagens
- Otimização de bundle size
- Cache de recursos estáticos
- Compressão de assets

## 🌐 Deploy

### Opções de Deploy

1. **Manus Platform** (Recomendado)
   - Deploy automático com um clique
   - SSL gratuito
   - Escalabilidade automática
   - Backup automático

2. **Vercel/Netlify**
   - Configure as variáveis de ambiente
   - Conecte o repositório GitHub
   - Deploy automático a cada push

3. **VPS/Cloud**
   - Configure Nginx como reverse proxy
   - Use PM2 para gerenciar o processo Node.js
   - Configure SSL com Let's Encrypt

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Francirley Oliveira](https://github.com/francirleyoliveira)

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:

- Email: contato@beautystudio.com
- Website: [beautystudio.com](https://beautystudio.com)

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) pelos componentes de UI
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [tRPC](https://trpc.io/) pela solução type-safe
- [Manus Platform](https://manus.im) pela infraestrutura

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!

