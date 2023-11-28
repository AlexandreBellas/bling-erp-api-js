# Bling ERP API

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API v3 do ERP Bling](https://developer.bling.com.br). O mais completo existente (e se não é, será).

Disponível para:

- [x] JavaScript
- [x] TypeScript
- [ ] PHP (em breve)
- [ ] C# (em breve)

**Atenção**: a versão 5.0.0+ do `bling-erp-api` utiliza a API v3 do Bling. Caso
deseje utilizar a API v2 do Bling,
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

## Entidades disponíveis

As entidades atualmente permitidas para interação são:

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
- [ ] Logísticas - Objetos (`.logisticasObjetos`)
- [ ] Logísticas - Serviços (`.logisticasServicos`)
- [ ] Naturezas de Operações (`.naturezasDeOperacoes`)
- [ ] Notas Fiscais de Consumidor Eletrônicas (`.nfces`)
- [ ] Notas Fiscais de Serviço Eletrônicas (`.nfses`)
- [ ] Notas Fiscais Eletrônicas (`.nfes`)
- [ ] Notificações (`.notificacoes`)
- [ ] Pedidos - Compras (`.pedidosCompras`)
- [ ] Pedidos - Vendas (`.pedidosVendas`)
- [ ] Produtos (`.produtos`)
- [ ] Produtos - Estruturas (`.produtosEstruturas`)
- [ ] Produtos - Fornecedores (`.produtosFornecedores`)
- [ ] Produtos - Lojas (`.produtosLojas`)
- [ ] Produtos - Variações (`.produtosVariacoes`)
- [ ] Situações (`.situacoes`)
- [ ] Situações - Módulos (`.situacoesModulos`)
- [ ] Situações - Transições (`.situacoesTransicoes`)
- [ ] Usuários (`.usuarios`)
- [ ] Vendedores (`.vendedores`)

Adicionaremos as restantes de acordo com as _releases_.

## Exemplo de uso

Para listar seus produtos, basta executar:

```js
// Também disponível pelo método:
// import Bling from 'bling-erp-api'
const Bling = require('bling-erp-api')
const apiKey = 'sua_api_key'

const blingConnection = new Bling(apiKey)

const products = await blingConnection.products.get()

console.log(products)
```

## Executando testes automatizados

Para isso, faça o clone do projeto e execute

```bash
npm run test
```

## Contribuição

Basta fazer um _fork_ do projeto e abrir novos _pull requests_ ou interagir
abrindo _issues_ sobre os problemas encontrados.
