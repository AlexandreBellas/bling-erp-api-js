# Bling ERP API - Typescript

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API v3 do ERP Bling](https://developer.bling.com.br)
para TypeScript. O mais completo existente.

Atualizado com a versão `v291` da API ([veja o registro de alterações](https://developer.bling.com.br/changelogs#2024-01-31)).

**Atenção**: a versão 5.0.0+ do `bling-erp-api` para TypeScript utiliza a API v3
do Bling. Caso deseja utilizar a API v2 do Bling,
[utilize a versão 4.0.0](https://github.com/AlexandreBellas/bling-erp-api/tree/v4.0.0).

## Instalação

Para instalar, execute o comando:

```bash
npm i bling-erp-api
```

## Importação do módulo

### CommonJS

```js
const Bling = require('bling-erp-api')
```

### ES6

```ts
import Bling from 'bling-erp-api'
```

## Criação de uma nova conexão

Para criar uma conexão ao serviço do Bling, basta instanciar o objeto com a [API key](https://developer.bling.com.br/autenticacao) em seu construtor.

```js
const apiKey = 'sua_api_key'
const blingConnection = new Bling(apiKey)
```

Vale destacar que o fluxo de criação e autorização do aplicativo **não é feito
pela biblioteca**. Ou seja, a biblioteca somente recebe o `access_token` gerado
a partir do _endpoint_ `/token`. [Veja a referência](https://developer.bling.com.br/aplicativos#tokens-de-acesso).

Para entender na prática como a autenticação citada acima funciona, [veja o
projeto de demonstração](https://github.com/AlexandreBellas/bling-erp-api/tree/main/demo).

## Entidades disponíveis

Todas as entidades do Bling atualmente são permitidas para interação. São elas:

- [x] Borderos (`.borderos`)
- [x] Campos customizados (`.camposCustomizados`)
- [x] Categorias - Lojas (`.categoriasLojas`)
- [x] Categorias - Produtos (`.categoriasProdutos`)
- [x] Categorias - Receitas e Despesas (`.categoriasReceitasDespesas`)
- [x] Contas a Pagar (`.contasPagar`)
- [x] Contas a Receber (`.contasReceber`)
- [x] Contas Contábeis (`.contasContabeis`)
- [x] Contatos (`.contatos`)
- [x] Contatos - Tipos (`.contatosTipos`)
- [x] Contratos (`.contratos`)
- [x] Depósitos (`.depositos`)
- [x] Empresas (`.empresas`)
- [x] Estoques (`.estoques`)
- [x] Formas de pagamento (`.formasDePagamento`)
- [x] Homologação (`.homologacao`)
- [x] Logísticas (`.logisticas`)
- [x] Logísticas - Etiquetas (`.logisticasEtiquetas`)
- [x] Logísticas - Objetos (`.logisticasObjetos`)
- [x] Logísticas - Remessas (`.logisticasRemessas`)
- [x] Logísticas - Serviços (`.logisticasServicos`)
- [x] Naturezas de Operações (`.naturezasDeOperacoes`)
- [x] Notas Fiscais de Consumidor Eletrônicas (`.nfces`)
- [x] Notas Fiscais de Serviço Eletrônicas (`.nfses`)
- [x] Notas Fiscais Eletrônicas (`.nfes`)
- [x] Notificações (`.notificacoes`)
- [x] Pedidos - Compras (`.pedidosCompras`)
- [x] Pedidos - Vendas (`.pedidosVendas`)
- [x] Produtos (`.produtos`)
- [x] Produtos - Estruturas (`.produtosEstruturas`)
- [x] Produtos - Fornecedores (`.produtosFornecedores`)
- [x] Produtos - Lojas (`.produtosLojas`)
- [x] Produtos - Variações (`.produtosVariacoes`)
- [x] Situações (`.situacoes`)
- [x] Situações - Módulos (`.situacoesModulos`)
- [x] Situações - Transições (`.situacoesTransicoes`)
- [x] Usuários (`.usuarios`)
- [x] Vendedores (`.vendedores`)

## Exemplo de uso

Para listar seus produtos, basta executar:

```js
// Também disponível como:
// import Bling from 'bling-erp-api'
const Bling = require('bling-erp-api')
const apiKey = 'sua_api_key'

const blingConnection = new Bling(apiKey)

const products = await blingConnection.produtos.get()

console.log(products)
```

## Executando os testes do projeto

Faça o clone do projeto, instale as dependências e execute:

```bash
npm run test
```
