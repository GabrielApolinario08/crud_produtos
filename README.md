# CRUD de Produtos - Documentação

## Descrição do Projeto

Este projeto é uma aplicação web que implementa um sistema de gerenciamento de produtos com as operações CRUD (Create, Read, Update, Delete). O sistema permite o cadastro, visualização, edição e exclusão de produtos, utilizando **Node.js**, **Express** no back-end e **React** no front-end.

## Funcionalidades

- **Cadastro de Produtos**: Permite adicionar um novo produto, com informações como nome, descrição, preço, quantidade em estoque e categoria.
- **Exibição de Produtos**: Exibe uma lista paginada de produtos com as informações de nome, descrição, preço, quantidade em estoque e categoria. Também permite buscar produtos por nome ou categoria.
- **Edição de Produtos**: Permite editar as informações de um produto existente.
- **Exclusão de Produtos**: Permite excluir um produto, com uma confirmação antes da exclusão.

## Requisitos Técnicos

### Back-End

- **Tecnologias**: Node.js, Express, MySQL (ou PostgreSQL)
- **Endpoints da API**:
    - `POST /api/produtos`: Cadastrar um novo produto.
    - `GET /api/produtos`: Listar todos os produtos.
    - `GET /api/produtos/:id`: Obter detalhes de um produto específico.
    - `PUT /api/produtos/:id`: Editar as informações de um produto.
    - `DELETE /api/produtos/:id`: Excluir um produto.

### Front-End

- **Tecnologias**: React, Axios
- **Funcionalidades**:
    - Formulários de cadastro e edição de produtos.
    - Exibição de lista de produtos com paginação.
    - Busca de produtos por nome ou categoria.
    - Exibição de mensagens de sucesso ou erro.

### Banco de Dados

- **Banco de Dados Relacional**: MySQL
- **Estrutura do Banco**:
    - O banco de dados deve ser chamado `crud_produtos`.

## Passo a Passo para Rodar a Aplicação

### Pré-Requisitos

- **MySQL**: Certifique-se de ter o MySQL instalado em sua máquina.
- **Banco de Dados**: Crie o banco de dados `crud_produtos` no MySQL antes de rodar a aplicação.

### Passos

1. **Clonar o Repositório**:

    ```bash
    git clone https://github.com/GabrielApolinario08/crud_produtos.git
    ```

2. **Entrar na Pasta do Projeto**:

    ```bash
    cd crud_produtos
    ```

3. **Abrir o Projeto no Editor de Código**:

    ```bash
    code .
    ```
4. **Configurações do Banco de Dados**:

No diretório `backend/`, existe um arquivo `.env`. Abra este arquivo e altere os valores de `USER` e `PASSWORD` para os dados de acesso ao seu banco de dados MySQL local.

**Exemplo de arquivo `.env`:**

```makefile
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=crud_produtos
```
Além disso, abra o arquivo backend/src/config/config.json e altere as mesmas informações de user e password para garantir a conexão com o banco de dados.
Exemplo de arquivo config.json:
```makefile
{
  "development": {
    "username": "seu_usuario_mysql",
    "password": "sua_senha_mysql",
    "database": "crud_produtos",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
5. **Instalar Dependências**: No terminal, dentro da pasta do projeto, execute:

    ```bash
    npm install
    ```

5. **Rodar a Aplicação**: Para iniciar a aplicação, execute o seguinte comando:

    ```bash
    npm run start
    ```

Isso iniciará o servidor back-end e o front-end será servido automaticamente no terminal, onde você pode clicar e acessar.
