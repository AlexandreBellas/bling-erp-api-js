# Bling ERP API

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API do ERP Bling](https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores). O mais completo existente (e se não é, será).
Disponível também para **Typescript**.

Em desenvolvimento.

## Instalação

Para instalar, execute o comando:

```bash
npm i bling-erp-api
```

## Importação do módulo

### Javascript

```js
const { Bling } = require('bling-erp-api')
```

### Typescript

```ts
import { Bling } from 'bling-erp-api'
```

## Criação de uma nova conexão

Para criar uma conexão ao serviço do Bling, basta instanciar o objeto com a [API
key](https://ajuda.bling.com.br/hc/pt-br/articles/360046937853-Introdu%C3%A7%C3%A3o-para-a-API-do-Bling-para-desenvolvedores-) em seu construtor. Lembre-se de sempre guardar a sua API key em seu arquivo `.env`.

```js
const apiKey = 'sua_api_key'
const blingConnection = new Bling(apiKey)
```

## Entidades disponíveis

As entidades atualmente permitidas para interação são:

- Contatos (`.contacts()`)
- Depósitos (`.deposits()`)
- Pedidos (`.orders()`)
- Pedidos de compra (`.purchaseOrders()`)
- Produtos (`.products()`)
- Propostas comerciais (`.commercialProposals()`)

Adicionaremos as restantes de acordo com as _releases_. Por ora, estamos focando
no funcionamento do pacote e no teste correto das entidades.
Além disso, as entidades no código estão em inglês. Em breve também deixaremos
disponíveis os métodos em português.

## Métodos permitidos

- `all()`: retorna todos os registros da entidade
- `find()`: retorna um registro da entidade desejada através de seu `id` ou `codigo`
- `findBy()`: retorna os registros da entidade **que se adequem aos filtros
  passados**
- `create()`: cria um registro da entidade
- `update()`: atualiza um registro da entidade a partir de seu `id` ou
  `codigo`
- `delete()`: remove um registro da entidade a partir de seu `id` ou
  `codigo`

## Exemplo de uso

Para listar todos os produtos, basta executar:

```js
const Bling = require('bling-erp-api')
const apiKey = 'sua_api_key'

const blingConnection = new Bling(apiKey)

const products = await blingConnection.products().all()

console.log(products)
```

## Autores do projeto

Os contribuidores principais, sem fins lucrativos, para a escolha das
tecnologias e estrutura do projeto são:

- Alexandre Batistella Bellas; [LinkedIn](https://linkedin.com/in/alebatistella/)
- Vitor Santana Cordeiro; [LinkedIn](https://linkedin.com/in/vitorsanc)

No futuro, contribuições da comunidade serão extremamente apreciadas! Ainda não possuímos as _guidelines de contribuição_ definidas (`CONTRIBUTING.md`), mas assim que as tivermos nós iremos apreciar fortemente a contribuição da comunidade, inclusive por meio da abertura de _issues_ 😊
