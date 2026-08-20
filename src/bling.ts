'use strict'

import { DEFAULT_API_BASE_URL } from './auth/constants'
import { createAuthProvider } from './auth/create-auth-provider'
import {
  IBlingOptions,
  IJwtAuthOptions,
  IOAuthAuthOptions,
  IOpaqueAuthOptions
} from './auth/interfaces/auth-options.interface'
import { OAuthClient } from './auth/oauth-client'
import { Entity } from './entities/@shared/entity'
import { Borderos } from './entities/borderos'
import { CamposCustomizados } from './entities/camposCustomizados'
import { CanaisDeVenda } from './entities/canaisDeVenda'
import { CategoriasLojas } from './entities/categoriasLojas'
import { CategoriasProdutos } from './entities/categoriasProdutos'
import { CategoriasReceitasDespesas } from './entities/categoriasReceitasDespesas'
import { ContasContabeis } from './entities/contasContabeis'
import { ContasPagar } from './entities/contasPagar'
import { ContasReceber } from './entities/contasReceber'
import { Contatos } from './entities/contatos'
import { ContatosTipos } from './entities/contatosTipos'
import { Contratos } from './entities/contratos'
import { Depositos } from './entities/depositos'
import { Empresas } from './entities/empresas'
import { Estoques } from './entities/estoques'
import { FormasDePagamento } from './entities/formasDePagamento'
import { GruposDeProdutos } from './entities/gruposDeProdutos'
import { Homologacao } from './entities/homologacao'
import { Logisticas } from './entities/logisticas'
import { LogisticasEtiquetas } from './entities/logisticasEtiquetas'
import { LogisticasObjetos } from './entities/logisticasObjetos'
import { LogisticasRemessas } from './entities/logisticasRemessas'
import { LogisticasServicos } from './entities/logisticasServicos'
import { NaturezasDeOperacoes } from './entities/naturezasDeOperacoes'
import { Nfces } from './entities/nfces'
import { Nfes } from './entities/nfes'
import { Nfses } from './entities/nfses'
import { Notificacoes } from './entities/notificacoes'
import { OrdensDeProducao } from './entities/ordensDeProducao'
import { PedidosCompras } from './entities/pedidosCompras'
import { PedidosVendas } from './entities/pedidosVendas'
import { Produtos } from './entities/produtos'
import { ProdutosEstruturas } from './entities/produtosEstruturas'
import { ProdutosFornecedores } from './entities/produtosFornecedores'
import { ProdutosLojas } from './entities/produtosLojas'
import { ProdutosVariacoes } from './entities/produtosVariacoes'
import { PropostasComerciais } from './entities/propostasComerciais'
import { Situacoes } from './entities/situacoes'
import { SituacoesModulos } from './entities/situacoesModulos'
import { SituacoesTransicoes } from './entities/situacoesTransicoes'
import { Usuarios } from './entities/usuarios'
import { Vendedores } from './entities/vendedores'
import { BlingInternalException } from './exceptions/bling-internal.exception'
import { Newable } from './helpers/types/newable.type'
import { getRepository } from './providers/ioc'
import { IBlingRepository } from './repositories/bling.repository.interface'

/**
 * Base compartilhada do conector: getters de entidades e repositório HTTP.
 *
 * Não instancie diretamente. Use `Bling.create`.
 *
 * @see https://developer.bling.com.br/referencia
 */
export abstract class BlingBase {
  #repository: IBlingRepository
  #modules: Record<string, Entity | undefined>

  /**
   * Constrói o conector a partir de um repositório já autenticado.
   *
   * @param repository Repositório HTTP compartilhado entre as entidades.
   */
  protected constructor(repository: IBlingRepository) {
    this.#repository = repository
    this.#modules = {}
  }

  /**
   * Obtém um módulo através de sua assinatura (seguindo o _pattern_ `Instance`).
   *
   * @param {Newable<T>} EntityClass A entidade desejada.
   *
   * @returns {T} A instância da entidade.
   */
  private getModule<T extends Entity>(EntityClass: Newable<T>): T {
    if (!this.#modules[EntityClass.name]) {
      this.#modules[EntityClass.name] = new EntityClass(this.#repository)
    }

    return this.#modules[EntityClass.name] as T
  }

  /**
   * Obtém a instância de interação com borderôs.
   *
   * @returns {Borderos}
   */
  public get borderos(): Borderos {
    return this.getModule(Borderos)
  }

  /**
   * Obtém a instância de interação com campos customizados.
   *
   * @returns {CamposCustomizados}
   */
  public get camposCustomizados(): CamposCustomizados {
    return this.getModule(CamposCustomizados)
  }

  /**
   * Obtém a instância de interação com categorias - lojas.
   *
   * @return {CategoriasLojas}
   */
  public get categoriasLojas(): CategoriasLojas {
    return this.getModule(CategoriasLojas)
  }

  /**
   * Obtém a instância de interação com categorias - produtos.
   *
   * @return {CategoriasProdutos}
   */
  public get categoriasProdutos(): CategoriasProdutos {
    return this.getModule(CategoriasProdutos)
  }

  /**
   * Obtém a instância de interação com categorias - receitas e despesas.
   *
   * @return {CategoriasReceitasDespesas}
   */
  public get categoriasReceitasDespesas(): CategoriasReceitasDespesas {
    return this.getModule(CategoriasReceitasDespesas)
  }

  /**
   * Obtém a instância de interação com contas a pagar.
   *
   * @return {ContasPagar}
   */
  public get contasPagar(): ContasPagar {
    return this.getModule(ContasPagar)
  }

  /**
   * Obtém a instância de interação com contas a receber.
   *
   * @return {ContasReceber}
   */
  public get contasReceber(): ContasReceber {
    return this.getModule(ContasReceber)
  }

  /**
   * Obtém a instância de interação com contas contábeis.
   *
   * @return {ContasContabeis}
   */
  public get contasContabeis(): ContasContabeis {
    return this.getModule(ContasContabeis)
  }

  /**
   * Obtém a instância de interação com contatos.
   *
   * @return {Contatos}
   */
  public get contatos(): Contatos {
    return this.getModule(Contatos)
  }

  /**
   * Obtém a instância de interação com contatos - tipos.
   *
   * @return {ContatosTipos}
   */
  public get contatosTipos(): ContatosTipos {
    return this.getModule(ContatosTipos)
  }

  /**
   * Obtém a instância de interação com contratos.
   *
   * @return {Contratos}
   */
  public get contratos(): Contratos {
    return this.getModule(Contratos)
  }

  /**
   * Obtém a instância de interação com depósitos.
   *
   * @return {Depositos}
   */
  public get depositos(): Depositos {
    return this.getModule(Depositos)
  }

  /**
   * Obtém a instância de interação com empresas.
   *
   * @return {Empresas}
   */
  public get empresas(): Empresas {
    return this.getModule(Empresas)
  }

  /**
   * Obtém a instância de interação com estoques.
   *
   * @return {Estoques}
   */
  public get estoques(): Estoques {
    return this.getModule(Estoques)
  }

  /**
   * Obtém a instância de interação com formas de pagamento.
   *
   * @return {FormasDePagamento}
   */
  public get formasDePagamento(): FormasDePagamento {
    return this.getModule(FormasDePagamento)
  }

  /**
   * Obtém a instância de interação com homologação.
   *
   * @return {Homologacao}
   */
  public get homologacao(): Homologacao {
    return this.getModule(Homologacao)
  }

  /**
   * Obtém a instância de interação com logísticas.
   *
   * @return {Logisticas}
   */
  public get logisticas(): Logisticas {
    return this.getModule(Logisticas)
  }

  /**
   * Obtém a instância de interação com logísticas - etiquetas.
   *
   * @return {LogisticasEtiquetas}
   */
  public get logisticasEtiquetas(): LogisticasEtiquetas {
    return this.getModule(LogisticasEtiquetas)
  }

  /**
   * Obtém a instância de interação com logísticas - objetos.
   *
   * @return {LogisticasObjetos}
   */
  public get logisticasObjetos(): LogisticasObjetos {
    return this.getModule(LogisticasObjetos)
  }

  /**
   * Obtém a instância de interação com logísticas - remessas.
   *
   * @return {LogisticasRemessas}
   */
  public get logisticasRemessas(): LogisticasRemessas {
    return this.getModule(LogisticasRemessas)
  }

  /**
   * Obtém a instância de interação com logísticas - serviços.
   *
   * @return {LogisticasServicos}
   */
  public get logisticasServicos(): LogisticasServicos {
    return this.getModule(LogisticasServicos)
  }

  /**
   * Obtém a instância de interação com naturezas de operações.
   *
   * @return {NaturezasDeOperacoes}
   */
  public get naturezasDeOperacoes(): NaturezasDeOperacoes {
    return this.getModule(NaturezasDeOperacoes)
  }

  /**
   * Obtém a instância de interação com notas fiscals de consumidor eletrônicas.
   *
   * @return {Nfces}
   */
  public get nfces(): Nfces {
    return this.getModule(Nfces)
  }

  /**
   * Obtém a instância de interação com notas fiscals de serviço eletrônicas.
   *
   * @return {Nfses}
   */
  public get nfses(): Nfses {
    return this.getModule(Nfses)
  }

  /**
   * Obtém a instância de interação com notas fiscals de serviço eletrônicas.
   *
   * @return {Nfes}
   */
  public get nfes(): Nfes {
    return this.getModule(Nfes)
  }

  /**
   * Obtém a instância de interação com notificações.
   *
   * @return {Notificacoes}
   */
  public get notificacoes(): Notificacoes {
    return this.getModule(Notificacoes)
  }

  /**
   * Obtém a instância de interação com pedidos - compras.
   *
   * @return {PedidosCompras}
   */
  public get pedidosCompras(): PedidosCompras {
    return this.getModule(PedidosCompras)
  }

  /**
   * Obtém a instância de interação com pedidos - vendas.
   *
   * @return {PedidosVendas}
   */
  public get pedidosVendas(): PedidosVendas {
    return this.getModule(PedidosVendas)
  }

  /**
   * Obtém a instância de interação com produtos.
   *
   * @return {Produtos}
   */
  public get produtos(): Produtos {
    return this.getModule(Produtos)
  }

  /**
   * Obtém a instância de interação com produtos - estruturas.
   *
   * @return {ProdutosEstruturas}
   */
  public get produtosEstruturas(): ProdutosEstruturas {
    return this.getModule(ProdutosEstruturas)
  }

  /**
   * Obtém a instância de interação com produtos - fornecedores.
   *
   * @return {ProdutosFornecedores}
   */
  public get produtosFornecedores(): ProdutosFornecedores {
    return this.getModule(ProdutosFornecedores)
  }

  /**
   * Obtém a instância de interação com produtos - fornecedores.
   *
   * @return {ProdutosLojas}
   */
  public get produtosLojas(): ProdutosLojas {
    return this.getModule(ProdutosLojas)
  }

  /**
   * Obtém a instância de interação com produtos - variações.
   *
   * @return {ProdutosVariacoes}
   */
  public get produtosVariacoes(): ProdutosVariacoes {
    return this.getModule(ProdutosVariacoes)
  }

  /**
   * Obtém a instância de interação com situações.
   *
   * @return {Situacoes}
   */
  public get situacoes(): Situacoes {
    return this.getModule(Situacoes)
  }

  /**
   * Obtém a instância de interação com situações - módulos.
   *
   * @return {SituacoesModulos}
   */
  public get situacoesModulos(): SituacoesModulos {
    return this.getModule(SituacoesModulos)
  }

  /**
   * Obtém a instância de interação com situações - transições.
   *
   * @return {SituacoesTransicoes}
   */
  public get situacoesTransicoes(): SituacoesTransicoes {
    return this.getModule(SituacoesTransicoes)
  }

  /**
   * Obtém a instância de interação com usuários.
   *
   * @return {Usuarios}
   */
  public get usuarios(): Usuarios {
    return this.getModule(Usuarios)
  }

  /**
   * Obtém a instância de interação com vendedores.
   *
   * @return {Vendedores}
   */
  public get vendedores(): Vendedores {
    return this.getModule(Vendedores)
  }

  /**
   * Obtém a instância de interação com canais de venda.
   *
   * @return {CanaisDeVenda}
   */
  public get canaisDeVenda(): CanaisDeVenda {
    return this.getModule(CanaisDeVenda)
  }

  /**
   * Obtém a instância de interação com ordens de produção.
   *
   * @return {OrdensDeProducao}
   */
  public get ordensDeProducao(): OrdensDeProducao {
    return this.getModule(OrdensDeProducao)
  }

  /**
   * Obtém a instância de interação com propostas comerciais.
   *
   * @return {PropostasComerciais}
   */
  public get propostasComerciais(): PropostasComerciais {
    return this.getModule(PropostasComerciais)
  }

  /**
   * Obtém a instância de interação com grupos de produtos.
   *
   * @return {GruposDeProdutos}
   */
  public get gruposDeProdutos(): GruposDeProdutos {
    return this.getModule(GruposDeProdutos)
  }
}

/**
 * Cliente autenticado com JWT (`auth.method: 'jwt'`).
 */
export class BlingJwtClient extends BlingBase {
  constructor(repository: IBlingRepository) {
    super(repository)
  }
}

/**
 * Cliente autenticado com token opaco legado (`auth.method: 'opaque'`).
 */
export class BlingOpaqueClient extends BlingBase {
  constructor(repository: IBlingRepository) {
    super(repository)
  }
}

/**
 * Cliente OAuth (`auth.method: 'oauth'`).
 * 
 * Acesse `bling.auth` para o fluxo de autorização.
 */
export class BlingOAuthClient extends BlingBase {
  constructor(
    repository: IBlingRepository,
    readonly auth: OAuthClient
  ) {
    super(repository)
  }
}

/**
 * Factory do conector à API do Bling.
 *
 * OAuth com `clientSecret` é **somente no servidor**.
 *
 * @example
 * const jwt = Bling.create({
 *   auth: { method: 'jwt', accessToken: 'seu-jwt' }
 * })
 *
 * @example
 * const oauth = Bling.create({
 *   auth: {
 *     method: 'oauth',
 *     clientId: 'id',
 *     clientSecret: 'secret',
 *     onTokens: async (tokens) => persistir(tokens)
 *   }
 * })
 * const url = oauth.auth.getAuthorizationUrl({ state: 'csrf' })
 *
 * @see https://developer.bling.com.br/aplicativos#fluxo-de-autoriza%C3%A7%C3%A3o
 * @see https://developer.bling.com.br/migracao-jwt
 */
export class Bling {
  private constructor() { }

  /**
   * Cria um cliente JWT.
   *
   * @param options URL base opcional e `auth.method: 'jwt'`.
   *
   * @returns {BlingJwtClient}
   */
  static create(options: IBlingOptions<IJwtAuthOptions>): BlingJwtClient

  /**
   * Cria um cliente com token opaco legado.
   *
   * @param options URL base opcional e `auth.method: 'opaque'`.
   *
   * @returns {BlingOpaqueClient}
   */
  static create(options: IBlingOptions<IOpaqueAuthOptions>): BlingOpaqueClient

  /**
   * Cria um cliente OAuth (authorization code, refresh e revoke).
   *
   * @param options URL base opcional e `auth.method: 'oauth'`.
   *
   * @returns {BlingOAuthClient}
   */
  static create(options: IBlingOptions<IOAuthAuthOptions>): BlingOAuthClient

  /**
   * Cria o conector conforme `auth.method`.
   *
   * @param options Opções nomeadas de conexão.
   *
   * @returns {BlingBase}
   */
  static create(options: IBlingOptions): BlingBase {
    const baseUrl = options.baseUrl ?? DEFAULT_API_BASE_URL

    switch (options.auth.method) {
      case 'jwt':
        return new BlingJwtClient(
          getRepository({
            baseUrl,
            authProvider: createAuthProvider(options.auth)
          })
        )
      case 'opaque':
        return new BlingOpaqueClient(
          getRepository({
            baseUrl,
            authProvider: createAuthProvider(options.auth)
          })
        )
      case 'oauth': {
        const authProvider = createAuthProvider(options.auth)
        return new BlingOAuthClient(
          getRepository({ baseUrl, authProvider }),
          authProvider.oauthClient
        )
      }
      default: {
        const exhaustive: never = options.auth
        throw new BlingInternalException(
          `Método de autenticação não suportado: ${String(exhaustive)}`
        )
      }
    }
  }
}

export default Bling

export type {
  IBlingAuthOptions,
  IBlingOptions,
  IJwtAuthOptions,
  IOAuthAuthOptions,
  IOpaqueAuthOptions
} from './auth/interfaces/auth-options.interface'
export type { IAuthorizationUrlParams } from './auth/interfaces/authorization-url.interface'
export type { IRevokeOptions } from './auth/interfaces/revoke.interface'
export type { IBlingTokenSet } from './auth/interfaces/token-set.interface'
export { OAuthClient } from './auth/oauth-client'
export type { IRevokeAction } from './auth/types/revoke-action.type'
export type { IRevokeTarget } from './auth/types/revoke-target.type'
export type { ITokenTypeHint } from './auth/types/token-type-hint.type'

