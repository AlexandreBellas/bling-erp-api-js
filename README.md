# Bling ERP API

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API do ERP Bling](https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores). O mais completo existente (e se não é, será).
Disponível também para **Typescript**.

## Instalação

Para instalar, execute o comando:

```bash
npm i bling-erp-api
```

## Importação do módulo

### CommonJS

```js
const { Bling } = require('bling-erp-api')
```

### ES6

```ts
import { Bling } from 'bling-erp-api'
```

## Criação de uma nova conexão

Para criar uma conexão ao serviço do Bling, basta instanciar o objeto com a [API
key](https://ajuda.bling.com.br/hc/pt-br/articles/360046937853-Introdu%C3%A7%C3%A3o-para-a-API-do-Bling-para-desenvolvedores-) em 
seu construtor.

```js
const apiKey = 'sua_api_key'
const blingConnection = new Bling(apiKey)
```

## Entidades disponíveis

As entidades atualmente permitidas para interação são:

- Borderos (`.borderos()`)
- Campos customizados (`.customizedFields()` ou `.camposCustomizados()`)
- Categorias (`.categories()` ou `.categorias()`)
- Categorias Loja (`.shopCategories()` ou `.categoriasLoja()`)
- Contatos (`.contacts()` ou `.contatos()`)
- Contas a pagar (`.billsToPay()` ou `.contasAPagar()`)
- Contas a receber (`.billsToReceive()` ou `.contasAReceber()`)
- Contratos (`.contracts()` ou `.contratos()`)
- CTes (`.ctes()`)
- Depósitos (`.deposits()` ou `.depositos()`)
- Formas de pagamento (`.paymentMethods()` ou `.formasDePagamento()`)
- Grupo de produtos (`.productGroups()` ou `.grupoDeProdutos()`)
- NFCes (`.nfces()`)
- Notas fiscais (`.invoices()` ou `.notasFiscais()`)
- Notas de serviço (`.serviceInvoices()` ou `.notasServicos()`)
- Pedidos (`.orders()` ou `.pedidos()`)
- Pedidos de compra (`.purchaseOrders()` ou `.pedidosDeCompra()`)
- Produtos (`.products()` ou `.produtos()`)
- Propostas comerciais (`.commercialProposals()` ou `.propostasComerciais()`)

Ainda estão em desenvolvimento as entidades:

- Logística
- Ordem de produção
- Produto Fornecedores
- Produto Loja

Adicionaremos as restantes de acordo com as _releases_.

## Métodos permitidos

- `all()`: retorna todos os registros da entidade
- `find()`: retorna um registro da entidade desejada através de seu `id` ou
  `codigo`
- `findBy()`: retorna os registros da entidade **que se adequem aos filtros
  passados**
- `create()`: cria um registro da entidade
- `update()`: atualiza um registro da entidade a partir de seu `id` ou
  `codigo`
- `delete()`: remove um registro da entidade a partir de seu `id` ou
  `codigo`

Nem todas as entidades possuem interação com todos os métodos (de acordo com a 
documentação da API do Bling). Ao utilizar o pacote e estar no VSCode, se o
desenvolvedor utilizar intelliSense ao programar, os métodos permitidos
aparecerão automaticamente após usar o atalho `Ctrl` + `Barra de espaço`.

## Exemplo de uso

Para listar todos os produtos, basta executar:

```js
// Também disponível pelo método:
// import { Bling } from 'bling-erp-api'
const { Bling } = require('bling-erp-api')
const apiKey = 'sua_api_key'

const blingConnection = new Bling(apiKey)

const products = await blingConnection.products().all()

console.log(products)
```

## Executando testes automatizados
Para isso, faça o clone do projeto e execute

```bash
npm run test
```

## Contribuição

Basta fazer um _fork_ do projeto e abrir novos _Pull Requests_ ou interagir
conosco abrindo _issues_ sobre os problemas encontrados.
