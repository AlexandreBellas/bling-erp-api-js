# Bling ERP API - PHP

Pacote de integração com a [API v3 do ERP Bling](https://developer.bling.com.br)
para PHP 8.2+. O mais completo existente.

Atualizado com a versão `v291` da API ([veja o registro de alterações](https://developer.bling.com.br/changelogs#2024-01-31)).

## Instalação

Para instalar, execute o comando:

```bash
composer require alebatistella/bling-erp-api
```

## Criação de uma nova conexão

Para criar uma conexão ao serviço do Bling, basta instanciar o objeto com a [API key](https://developer.bling.com.br/autenticacao) em seu construtor.

```php
use AleBatistella\BlingErpApi\Bling;

$apiKey = "sua_api_key";
$blingConnection = new Bling($apiKey);
```

Vale destacar que o fluxo de criação e autorização do aplicativo **não é feito
pela biblioteca**. Ou seja, a biblioteca somente recebe o `access_token` gerado
a partir do _endpoint_ `/token`. [Veja a referência](https://developer.bling.com.br/aplicativos#tokens-de-acesso).

## Entidades disponíveis

Nem todas as entidades do Bling estão permitidas para interação. As atuais são:

- [x] Borderos (`->borderos`)
- [ ] Campos customizados (`->camposCustomizados`)
- [ ] Categorias - Lojas (`->categoriasLojas`)
- [ ] Categorias - Produtos (`->categoriasProdutos`)
- [ ] Categorias - Receitas e Despesas (`->categoriasReceitasDespesas`)
- [ ] Contas a Pagar (`->contasPagar`)
- [ ] Contas a Receber (`->contasReceber`)
- [ ] Contas Contábeis (`->contasContabeis`)
- [ ] Contatos (`->contatos`)
- [ ] Contatos - Tipos (`->contatosTipos`)
- [ ] Contratos (`->contratos`)
- [ ] Depósitos (`->depositos`)
- [ ] Empresas (`->empresas`)
- [ ] Estoques (`->estoques`)
- [ ] Formas de pagamento (`->formasDePagamento`)
- [ ] Homologação (`->homologacao`)
- [ ] Logísticas (`->logisticas`)
- [ ] Logísticas - Etiquetas (`->logisticasEtiquetas`)
- [ ] Logísticas - Objetos (`->logisticasObjetos`)
- [ ] Logísticas - Remessas (`->logisticasRemessas`)
- [ ] Logísticas - Serviços (`->logisticasServicos`)
- [ ] Naturezas de Operações (`->naturezasDeOperacoes`)
- [ ] Notas Fiscais de Consumidor Eletrônicas (`->nfces`)
- [ ] Notas Fiscais de Serviço Eletrônicas (`->nfses`)
- [ ] Notas Fiscais Eletrônicas (`->nfes`)
- [ ] Notificações (`->notificacoes`)
- [ ] Pedidos - Compras (`->pedidosCompras`)
- [ ] Pedidos - Vendas (`->pedidosVendas`)
- [ ] Produtos (`->produtos`)
- [ ] Produtos - Estruturas (`->produtosEstruturas`)
- [ ] Produtos - Fornecedores (`->produtosFornecedores`)
- [ ] Produtos - Lojas (`->produtosLojas`)
- [ ] Produtos - Variações (`->produtosVariacoes`)
- [ ] Situações (`->situacoes`)
- [ ] Situações - Módulos (`->situacoesModulos`)
- [ ] Situações - Transições (`->situacoesTransicoes`)
- [ ] Usuários (`->usuarios`)
- [ ] Vendedores (`->vendedores`)

## Exemplo de uso

Para listar seus produtos, basta executar:

```js
use AleBatistella\BlingErpApi\Bling;

$apiKey = "sua_api_key";
$blingConnection = new Bling($apiKey);

$products = $blingConnection->produtos->get();

dd($products);
```

## Executando os testes do projeto

Faça o clone do projeto, instale as dependências e execute:

```bash
vendor/phpunit/phpunit/phpunit -c php/phpunit.xml
```
