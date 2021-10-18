# Bling ERP API

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a API do Bling ERP. O mais completo existente (e se não é, será).
Disponível também para Typescript.

Em desenvolvimento.

## Instalação

Para instalar, execute o comando

```bash
npm i bling-erp-api
```

## Importação do módulo

### Javascript

```js
const Bling = require('bling-erp-api')
```

### Typescript

```ts
import Bling from 'bling-erp-api'
```

## Criação de uma nova conexão

É possível criar uma conexão ao serviço bastando instanciar o objeto com a API
key em seu construtor.

```js
const apiKey = 'sua_api_key'
const blingConnection = new Bling(apiKey)
```

## Entidades disponíveis

As entidades atualmente permitidas para interação são somente

- Produtos
- Pedidos

Em breve serão adicionadas mais.

## Métodos permitidos

Os métodos permitidos são

- `all()`: retornam-se todos os registros da entidade
- `find()`: retorna-se a entidade desejada através de seu `id` ou `codigo`
- `findBy()`: retornam-se os registros da entidade que se adequem aos filtros
  passados
- `create()`: cria-se um registro de uma entidade
- `update()`: atualiza-se um registro de uma entidade a partir de seu `id` ou
  `codigo`
- `delete()`: remove-se um registro de uma entidade a partir de seu `id` ou
  `codigo`

## Exemplo de uso

Para listar todos os produtos, basta-se executar

```js
const Bling = require('bling-erp-api')
const apiKey = 'sua_api_key'

const blingConnection = new Bling(apiKey)

const products = await blingConnection.products().all()

console.log(products)
```

## Autores do projeto

Os contribuidores principais, sem fins lucrativos, para a escolha das
tecnologias e estrutura do projeto são

- Alexandre Batistella Bellas; [LinkedIn](https://linkedin.com/in/alebatistella/)
- Vitor Santana Cordeiro; [LikedIn](https://linkedin.com/in/vitorsanc)
