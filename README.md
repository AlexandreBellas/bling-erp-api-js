- [Versão em PHP](https://github.com/AlexandreBellas/bling-erp-api-php)
- Versão em C# (em breve)

# Bling ERP API - Javascript/Typescript

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api-js/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API v3 do ERP Bling](https://developer.bling.com.br)
para Javascript/TypeScript. O mais completo existente.

Atualizado com a versão `v303` da API ([veja o registro de alterações](https://developer.bling.com.br/changelogs#2024-06-19)).

**Atenção**: a versão 5.0.0+ do `bling-erp-api` para Javascript/TypeScript
utiliza a API v3 do Bling. Caso deseja utilizar a API v2 do Bling,
[utilize a versão 4.0.0](https://github.com/AlexandreBellas/bling-erp-api-js/tree/v4.0.0).

## Instalação

Para instalar, execute o comando:

```bash
npm i bling-erp-api
```

## Criação de uma nova conexão

Para criar uma conexão ao serviço do Bling, basta instanciar o objeto com a [API key](https://developer.bling.com.br/autenticacao) em seu construtor.

```js
import Bling from 'bling-erp-api'

const apiKey = 'sua_api_key'
const blingConnection = new Bling(apiKey)
```

Vale destacar que o fluxo de criação e autorização do aplicativo **não é feito
pela biblioteca**. Ou seja, a biblioteca somente recebe o `access_token` gerado
a partir do _endpoint_ `/token`. [Veja a referência](https://developer.bling.com.br/aplicativos#tokens-de-acesso).

Para entender na prática como a autenticação citada acima funciona, [veja o
projeto de demonstração](https://github.com/AlexandreBellas/bling-erp-api-js/tree/main/demo).

## Entidades disponíveis

Quase todas as entidades do Bling atualmente são permitidas para interação. São elas:

- [x] Borderos (`.borderos`)
- [x] Campos customizados (`.camposCustomizados`)
- [x] Canais de Venda (`.canaisDeVenda`)
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
- [x] Formas de Pagamento (`.formasDePagamento`)
- [ ] Grupos de Produtos (`.gruposDeProdutos`)
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
- [x] Ordens de Produção (`.ordensDeProducao`)
- [x] Pedidos - Compras (`.pedidosCompras`)
- [x] Pedidos - Vendas (`.pedidosVendas`)
- [x] Produtos (`.produtos`)
- [x] Produtos - Estruturas (`.produtosEstruturas`)
- [x] Produtos - Fornecedores (`.produtosFornecedores`)
- [x] Produtos - Lojas (`.produtosLojas`)
- [x] Produtos - Variações (`.produtosVariacoes`)
- [ ] Propostas Comerciais (`.propostasComerciais`)
- [x] Situações (`.situacoes`)
- [x] Situações - Módulos (`.situacoesModulos`)
- [x] Situações - Transições (`.situacoesTransicoes`)
- [x] Usuários (`.usuarios`)
- [x] Vendedores (`.vendedores`)

## Exemplo de uso

Para listar seus produtos, basta executar:

```js
import Bling from 'bling-erp-api'

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

## Contribuindo ao projeto

- [Guia de contribuição](https://github.com/AlexandreBellas/bling-erp-api-js/blob/v5.0.0/CONTRIBUTING.md)
- [Apoie o projeto](https://www.paypal.com/donate/?hosted_button_id=G2NJKZ5MUMKBS)
