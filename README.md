# Finance AI

**Finance AI** é uma plataforma inovadora de gestão financeira projetada para ajudar os usuários a rastrear e analisar suas transações financeiras de forma simples. Alimentada por inteligência artificial, esta plataforma SaaS oferece painéis de análise, rastreamento de transações e planos de assinatura para desbloquear recursos avançados, como transações ilimitadas e relatórios financeiros personalizados com IA.

---

## 🚀 Recursos

1. **Gerenciamento de Transações**

   - Adicione transações selecionando:
     - **Categoria** (ex.: Alimentação, Transporte, Serviços Públicos)
     - **Método de Pagamento** (ex.: Cartão de Crédito, Dinheiro)
     - **Tipo** (Depósito, Despesa ou Investimento)
   - Visualize uma lista de todas as transações na página dedicada a Transações.

2. **Painel de Controle**

   - Visualize seus dados financeiros com:
     - Agrupamento por categorias.
     - Resumo das finanças atuais.
     - Gráficos e insights para monitorar despesas.

3. **Planos de Assinatura**

   - **Plano Básico**: Gratuito, limitado a 10 transações por mês.
   - **Plano Premium**: Transações ilimitadas e relatórios financeiros com IA por R$19/mês.

4. **Relatórios Financeiros com IA**

   - Integrados ao ChatGPT para fornecer insights personalizados sobre suas finanças.
   - Disponível para assinantes Premium.

5. **Autenticação e Pagamentos Seguros**
   - Autenticação de usuários via [Clerk](https://clerk.dev/).
   - Pagamentos gerenciados através do [Stripe](https://stripe.com/).

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza um conjunto robusto de tecnologias modernas:

### **Frontend**

- **[Next.js](https://nextjs.org/)** (14.2.16): Framework baseado em React para aplicações web rápidas e escaláveis.
- **[Tailwind CSS](https://tailwindcss.com/)** (3.4.1): Framework CSS com foco em utilitários para estilização.
- **[ShadCN](https://ui.shadcn.com/)**: Componentes visualmente atraentes e reutilizáveis.
- **[React Hook Form](https://react-hook-form.com/)**: Manejo simplificado de formulários.
- **[Recharts](https://recharts.org/)**: Biblioteca para visualização de dados e gráficos.
- **[Lucide](https://lucide.dev/)**: Biblioteca de ícones modernos.

### **Backend**

- **[Prisma](https://www.prisma.io/)** (5.21.1): ORM para consultas e migrações de banco de dados.
- **[OpenAI API](https://openai.com/api/)**: Integração com ChatGPT para insights financeiros com IA.
- **[Neon](https://neon.tech/)**: Infraestrutura rápida para Postgres.
- **[Stripe](https://stripe.com/)**: Gateway de pagamentos para gerenciar assinaturas.

### **Autenticação**

- **[Clerk](https://clerk.dev/)** (5.7.5): Autenticação segura e fluida para usuários.

### **Ferramentas de Desenvolvimento**

- **TypeScript** (5.x): Tipagem estática para código escalável.
- **Husky** (9.1.6): Hooks do Git para manter a qualidade do código.
- **Lint-Staged** (12.3.2): Verificações pré-commit para linting.
- **Prettier** (3.3.3): Formatação de código.
- **ESLint** (8.x): Linter para JavaScript.
- **Tailwind Merge**: Utilitário para mesclar classes do Tailwind de forma eficiente.

---

## 📚 Visão Geral das Páginas

1. **Home/Painel de Controle**

   - Mostra insights financeiros agregados e gráficos.
   - Exibe o saldo atual, despesas agrupadas e mais.

2. **Transações**

   - Lista de todas as transações do usuário.
   - Filtros e ordenação por categorias, métodos de pagamento e tipos.

3. **Assinaturas**

   - Escolha entre os planos Gratuito e Premium.
   - Sistema de pagamento integrado com Stripe para upgrades.

4. **Login/Autenticação**
   - Alimentado pelo Clerk para login seguro e gerenciamento de usuários.

---

## 💳 Detalhes da Assinatura

- **Plano Básico**

  - Gratuito.
  - Limitado a **10 transações por mês**.

- **Plano Premium**
  - **R$19/mês**.
  - Transações ilimitadas.
  - Insights financeiros gerados por IA com ChatGPT.

---

## 📦 Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/yourusername/finance-ai.git
   cd finance-ai

   ```

2. Instale as dependências:

   ```bash
   npm install

   ```

3. Configure as variáveis de ambiente:

   ```bash
   NEXT_PUBLIC_CLERK_FRONTEND_API=seu_clerk_frontend_api
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_clerk_publishable_key
   CLERK_API_KEY=seu_clerk_api_key
   CLERK_SECRET_KEY=seu_clerk_secret_key
   STRIPE_PREMIUM_PLAN_PRICE_ID=seu_stripe_id_plan
   STRIPE_SECRET_KEY=seu_stripe_secret_key
   STRIPE_PUBLIC_KEY=seu_stripe_public_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=seu_next_public_stripe_publishable_key
   OPENAI_API_KEY=sua_openai_api_key
   DATABASE_URL=sua_database_url
   APP_URL=a_url_para_implantacao

   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## 🧑‍💻 Scripts

- **`npm run dev`** Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera a aplicação para produção.
- **`npm run start`**: Inicia o servidor em produção.
- **`npm run prepare`**: Prepara o projeto gerando o cliente Prisma e configurando os hooks do Husky.

## 🌟 Melhorias Futuras

- Melhorar o design mobile-first para usabilidade aprimorada.
- Permitir o usuário que possui o plano premium de extrair um PDF do seu relatório mensal de transações.

## Licença

- [Full Stack Week](https://lp.fullstackclub.com.br/)
