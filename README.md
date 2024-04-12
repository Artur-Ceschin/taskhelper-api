<h1 align="center">TaskHelpers a plataforma que você buscava🤝</h1>

Projeto realizado como desafio prático para o curso de Desenvolvimento FullStack na PUCRS. Consiste em uma interface desenvolvida com React e um projeto construído com Node.js para criar uma aplicação prática e funcional. Utiliza diversos conhecimentos adquiridos ao longo do curso.

## Descrição do projeto

Esta é a aplicação back-end de um sistema de gerenciamento de serviços, onde clientes e prestadores de serviços de diversas áreas podem se encontrar. Utilizando critérios como localização, preço, tipo de serviço e outros fatores, os clientes podem selecionar prestadores que atendam às suas necessidades. Existem dois tipos principais de usuários: os "taskers" (que contratam os serviços) e os "helpers" (que fornecem os serviços contratados). Com base nisso, a plataforma faz um "match" para conectar o cliente ao prestador de serviço mais adequado.

## UI 🎨

- [Figma - Taskhelpers](https://www.figma.com/file/Ed96JNLRj7ggCIXpaeezPo/TaskHelpers?type=design&node-id=0-1&mode=design&t=oxE2VtNQVYudjXGA-0)

## Projeto WEB

- [Projeto WEB - GitHub](https://github.com/Artur-Ceschin/taskhelper-web)

## Funcionalidades do projeto

- Cadastrar usuário e realizar Login
- Cadastrar uma nova tarefa
- Buscar por tarefas
- Filtrar e pesquisar por clientes
- Cadastrar e atualizar o perfil

## Tecnologias 🖥️

- [NodeJS](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org/)
- [JSON-Web-Token](https://jwt.io/)
- [Prisma](https://www.prisma.io/)
- [Fastify](https://fastify.dev/)
- [Docker](https://www.docker.com/)
- [Zod](https://zod.dev/)

## Como usar

<!-- Example: -->

Pra clonar o repositório vocês precisar ter instalado o [Git](https://git-scm.com) com [Node.js](https://nodejs.org/en/download/) (já vêm com o [npm](http://npmjs.com)) instalados no seu computados. Pela a sua linha de comando:

```bash
# Clone this repository
$ git clone https://github.com/Artur-Ceschin/taskhelper-api.git

docker compose up -d

# Crie um arquivo .env e preencha um valor para o JWT_SECRET

npm i
npm run dev
# or
yarn
yarn dev
# or
pnpm i
pnpm run dev

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
