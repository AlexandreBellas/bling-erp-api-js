- [Versão em PHP](https://github.com/AlexandreBellas/bling-erp-api-php)
- Versão em C# (em breve)

# Bling ERP API - Javascript/Typescript

[![](https://img.shields.io/npm/v/bling-erp-api.svg)](https://www.npmjs.com/package/bling-erp-api)
[![install size](https://packagephobia.com/badge?p=bling-erp-api)](https://packagephobia.com/result?p=bling-erp-api)
[![code coverage](https://coveralls.io/repos/github/AlexandreBellas/bling-erp-api-js/badge.svg?branch=main)](https://coveralls.io/github/AlexandreBellas/bling-erp-api?branch=main)

Pacote de integração com a [API v3 do ERP Bling](https://developer.bling.com.br)
para Javascript/TypeScript. O mais completo existente.

Cobre autenticações JWT, fluxo OAuth e token opaco (legado).

Atualizado com a versão `v354` da API ([veja o registro de alterações](https://developer.bling.com.br/changelogs#2026-v354)).

## Instalação

Para instalar, execute o comando:

```bash
npm i bling-erp-api
```

## Criação de uma nova conexão

Use `Bling.create({ auth })` para abrir a conexão; o argumento `auth.method`
escolhe se a biblioteca obtém o token ou usa um token que você já tem.

A biblioteca não assina o JWT. O Bling emite o token em `POST /oauth/token`
quando a requisição envia `enable-jwt: 1`. O JWT vem no campo `access_token` na
resposta desta chamada. O formato recomendado para autenticação é o JWT.

Em suma, quando usar cada valor em `auth.method`:

- `oauth`: ainda não há token. A biblioteca pede o JWT ao Bling.
- `jwt`: o JWT já está salvo. A biblioteca só anexa o token nas chamadas.
- `opaque`: o token salvo é opaco (legado, descontinuado no Bling).

### OAuth (`authorization_code`)

Use para obter o JWT. Rode sempre no servidor para a sua segurança. A biblioteca
cobre a URL de autorização, a troca do code, o refresh e o revoke.

O Bling não implementa _client credentials_, _password_ nem _implicit_.
`clientSecret` fica somente no servidor. Reiterando: não use `method: 'oauth'`
no navegador.

A troca e o refresh sempre enviam `enable-jwt: 1`. Persista o JSON de resposta 
usando o callback `onTokens`. Neste callback, `tokens.access_token` é o JWT.

```js
import Bling from 'bling-erp-api'

const blingConnection = Bling.create({
  auth: {
    method: 'oauth',
    clientId: 'seu-client-id',
    clientSecret: 'seu-client-secret',
    // Opcional. refresh_token já salvo renova o acesso sem novo login.
    refreshToken: 'opcional-se-ja-autorizado',
    // Roda após cada POST /oauth/token bem-sucedido. Guarde o JSON aqui.
    // `tokens.access_token` é o JWT. refresh_token vale 30 dias.
    onTokens: async (tokens) => {
      // persista access_token e refresh_token
    }
  }
})

// Monta a URL de autorização. Redirecione o navegador do usuário para ela.
// `state` é um valor aleatório seu; confira o mesmo valor quando o Bling voltar.
const authorizationUrl = blingConnection.auth.getAuthorizationUrl({
  state: 'csrf-aleatorio'
})

// Depois do login, o Bling abre o redirect_uri configurado com alguns query
// params adicionados, por exemplo:
// https://seu-app/callback?code=AUTHORIZATION_CODE&state=csrf-aleatorio
// Obtenha o `code` a partir deste redirecionamento do Bling para o seu
// servidor; a linha abaixo somente simula este recebimento
const code = 'AUTHORIZATION_CODE'

// Use o `code` para obter o JWT. O `code` expira em 1 minuto e vale uma vez.
// `tokens.access_token` é o JWT; `onTokens` recebe o mesmo JSON.
const tokens = await blingConnection.auth.exchangeAuthorizationCode(code)

const products = await blingConnection.produtos.get()
```

`blingConnection.auth` existe **somente** no cliente OAuth (`BlingOAuthClient`).
Clientes JWT e opacos não têm essa propriedade.

O mesmo cliente OAuth já chama os recursos depois da troca. O `access_token`
guardado também serve depois em `method: 'jwt'`.

O refresh renova o access token com `POST /oauth/token` e
`grant_type=refresh_token`. O refresh token vale 30 dias. Com `autoRefresh`
(padrão quando há `refreshToken`), um `401` nas chamadas de recurso dispara o
refresh e **uma** nova tentativa.

Entenda o [fluxo de autorização](https://developer.bling.com.br/aplicativos#fluxo-de-autoriza%C3%A7%C3%A3o) e como aplicá-lo neste [projeto de demonstração](https://github.com/AlexandreBellas/bling-erp-api-js/tree/main/demo).

### JWT

Use quando você já possui o access token JWT (o `access_token` do OAuth
anteriormente descrito). A biblioteca envia `Authorization: Bearer` e
`enable-jwt: 1` em **todas** as chamadas de recurso. Não há troca nem renovação.

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

Use apenas se o token que você já tem não é JWT. Tokens opacos estão
descontinuados no Bling.

Considere atualizar seu fluxo para OAuth + JWT.

```js
const blingConnection = Bling.create({
  auth: {
    method: 'opaque',
    accessToken: 'token-opaco'
  }
})
```

## Entidades disponíveis

Todas as entidades do Bling atualmente são permitidas para interação. São elas:

- [x] Anúncios (`.anuncios`)
- [x] Anúncios - Categorias (`.anunciosCategorias`)
- [x] Borderos (`.borderos`)
- [x] Caixas e Bancos (`.caixas`)
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
- [x] Documentos Compartilhados (`.documentosCompartilhados`)
- [x] Empresas (`.empresas`)
- [x] Estoques (`.estoques`)
- [x] Formas de Pagamento (`.formasDePagamento`)
- [x] Grupos de Produtos (`.gruposDeProdutos`)
- [x] Homologação (`.homologacao`)
- [x] Listas de Preços (`.listasPrecos`)
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
- [x] Ordens de Serviço (`.ordensServico`)
- [x] Pedidos - Compras (`.pedidosCompras`)
- [x] Pedidos - Vendas (`.pedidosVendas`)
- [x] Produtos (`.produtos`)
- [x] Produtos - Estruturas (`.produtosEstruturas`)
- [x] Produtos - Fornecedores (`.produtosFornecedores`)
- [x] Produtos - Lojas (`.produtosLojas`)
- [x] Produtos - Lotes (`.produtosLotes`)
- [x] Produtos - Lotes Lançamentos (`.produtosLotesLancamentos`)
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
