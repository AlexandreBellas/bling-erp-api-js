- [Versão em PHP](https://github.com/AlexandreBellas/bling-erp-api-php)
- Versão em C# (em breve)

# Bling ERP API - Javascript/Typescript

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api-js/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API v3 do ERP Bling](https://developer.bling.com.br)
para Javascript/TypeScript. O mais completo existente.

Atualizado com a versão `v310` da API ([veja o registro de alterações](https://developer.bling.com.br/changelogs#2024-10-02)).

**Atenção**: a versão 5.0.0+ do `bling-erp-api` para Javascript/TypeScript
utiliza a API v3 do Bling. Caso deseja utilizar a API v2 do Bling,
[utilize a versão 4.0.0](https://github.com/AlexandreBellas/bling-erp-api-js/tree/v4.0.0).
A versão **6.0.0** troca `new Bling(accessToken)` por `Bling.create({ auth })`
e passa a cobrir JWT, token opaco legado e o fluxo OAuth.

## Instalação

Para instalar, execute o comando:

```bash
npm i bling-erp-api
```

## Criação de uma nova conexão

A construção é sempre `Bling.create({ auth })`. O campo `auth.method` escolhe
como o token será usado ou obtido.

### JWT (recomendado)

Use quando você já possui um access token JWT (emitido com o header
`enable-jwt: 1` no `/oauth/token`). A biblioteca envia
`Authorization: Bearer` e `enable-jwt: 1` em **todas** as chamadas de recurso.

```js
import Bling from 'bling-erp-api'

const blingConnection = Bling.create({
  auth: {
    method: 'jwt',
    accessToken: 'seu-jwt'
  }
})
```

[Guia de migração JWT](https://developer.bling.com.br/migracao-jwt).

### Token opaco (legado)

Use apenas se o token que você já tem **não** é JWT. Tokens opacos estão
descontinuados no Bling.

```js
const blingConnection = Bling.create({
  auth: {
    method: 'opaque',
    accessToken: 'token-opaco'
  }
})
```

### OAuth (`authorization_code`)

A biblioteca cobre authorize, troca do code, refresh e revoke. O Bling **não**
implementa client credentials, password nem implicit. **`clientSecret` é
somente no servidor** — não use `method: 'oauth'` no navegador.

A troca e o refresh sempre enviam `enable-jwt: 1`. Persista o JSON através de um
listener registrado via `onTokens`.

```js
import Bling from 'bling-erp-api'

const blingConnection = Bling.create({
  auth: {
    method: 'oauth',
    clientId: 'seu-client-id',
    clientSecret: 'seu-client-secret',
    refreshToken: 'opcional-se-ja-autorizado',
    onTokens: async (tokens) => {
      // persista access_token e refresh_token
    }
  }
})

const authorizationUrl = blingConnection.auth.getAuthorizationUrl({
  state: 'csrf-aleatorio'
})
// redirecione o usuário; no callback (code expira em 1 minuto):
await blingConnection.auth.exchangeAuthorizationCode(code)

const products = await blingConnection.produtos.get()
```

`bling.auth` existe **somente** no cliente OAuth (`BlingOAuthClient`). Clientes
JWT e opacos não têm essa propriedade.

Refresh: o access token é renovado com `POST /oauth/token` e
`grant_type=refresh_token` (refresh vale 30 dias). Com `autoRefresh` (padrão
quando há `refreshToken`), um `401` nas chamadas de recurso dispara o refresh
e **uma** nova tentativa.

[Fluxo de autorização](https://developer.bling.com.br/aplicativos#fluxo-de-autoriza%C3%A7%C3%A3o).
Exemplo completo: [projeto de demonstração](https://github.com/AlexandreBellas/bling-erp-api-js/tree/main/demo).

## Entidades disponíveis

Todas as entidades do Bling atualmente são permitidas para interação. São elas:

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
- [x] Grupos de Produtos (`.gruposDeProdutos`)
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
- [x] Propostas Comerciais (`.propostasComerciais`)
- [x] Situações (`.situacoes`)
- [x] Situações - Módulos (`.situacoesModulos`)
- [x] Situações - Transições (`.situacoesTransicoes`)
- [x] Usuários (`.usuarios`)
- [x] Vendedores (`.vendedores`)

## Exemplo de uso

Para listar seus produtos, basta executar:

```js
import Bling from 'bling-erp-api'

const blingConnection = Bling.create({
  auth: {
    method: 'jwt',
    accessToken: 'seu-jwt'
  }
})

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
