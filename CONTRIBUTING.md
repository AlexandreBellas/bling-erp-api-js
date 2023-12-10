# Contribuição ao projeto

Agradeço muito o interesse de apoio ao projeto. Para uma contribuição saudável e
inclusiva, devemos manter um padrão de execução.

## Como começar a contribuição

1. Crie uma _issue_ explicando o problema e o desejo de alteração;
2. Após receber um retorno validando o problema e permitindo a alteração, faça
   um novo `fork` do repositório;
3. Implemente as mudanças ou novas funcionalidades que deseja realizar em seu
   `fork`;
4. Crie um novo _pull request_ para a _branch_ `develop` do repositório oficial.

## Padrões de projeto

- Todas as variáveis e nomes de funções devem estar em `camelCase`;
- Todas as classes devem estar em `PascalCase`;
- Todas as entidades devem seguir o padrão:
  1. Uma pasta para cada entidade;
  2. Um arquivo para cada rota disponibilizada em relação aos envios/retornos;
  3. Um arquivo principal de declaração e utilização da entidade;
  4. Teste unitário de chamada e tipagem de retorno.
- Deve-se manter o padrão do código baseado nas configurações do **prettier** e
  do **eslint** do projeto.

### Mensagens de _commits_

Siga o padrão [_conventional commits_](https://www.conventionalcommits.org/en/v1.0.0/).

## Adicionar uma nova linguagem de programação ao projeto

1. Crie uma _issue_ anunciando o desejo de trabalhar em uma nova linguagem de
   programação;
2. A sua _issue_ será fixada para que outras pessoas possam acompanhar e apoiar
   a sua implementação;
3. Realize a sua implementação em uma nova pasta na raiz do projeto com o nome
   da linguagem de programação em letras minúsculas (por exemplo: Java seria
   criado como `java`, Elixir seria criado como `elixir`, etc);
4. Crie um _pull request_ para a _branch_ `develop` do repositório oficial a
   cada nova entidade implementada.

A ideia é ter o pacote já inicializado e disponibilizado mesmo que nem todas as
entidades estejam disponíveis. Isso permite uma contribuição mais facilitada de
outros desenvolvedores.
