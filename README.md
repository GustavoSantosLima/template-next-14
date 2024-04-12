# Meu Projeto Next.js 14

Este é um projeto Next.js 14 utilizando as tecnologias:

- Auth.js
- Shadcn UI
- TypeScript
- Tailwind CSS
- React Hook Form
- Prisma

## Requisitos

- Node.js
- Yarn
- Banco de Dados (por exemplo, PostgreSQL, MySQL, SQLite)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/GustavoSantosLima/template-next-14.git
```

2. Instale as dependências:

```bash
cd template-next-14
yarn install
```

## Configuração

1. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente conforme necessário.

2. Configure o Prisma alterando o arquivo `prisma/schema.prisma` com os detalhes do seu banco de dados.

## Uso

1. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

2. Acesse o projeto em seu navegador em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `pages/`: Páginas da aplicação.
- `components/`: Componentes React reutilizáveis.
- `auth/`: Configuração de autenticação e rotas protegidas.
- `prisma/`: Arquivos relacionados ao Prisma, incluindo o schema do banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
