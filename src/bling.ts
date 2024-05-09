'use strict'

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
import { PedidosCompras } from './entities/pedidosCompras'
import { PedidosVendas } from './entities/pedidosVendas'
import { Produtos } from './entities/produtos'
import { ProdutosEstruturas } from './entities/produtosEstruturas'
import { ProdutosFornecedores } from './entities/produtosFornecedores'
import { ProdutosLojas } from './entities/produtosLojas'
import { ProdutosVariacoes } from './entities/produtosVariacoes'
import { Situacoes } from './entities/situacoes'
import { SituacoesModulos } from './entities/situacoesModulos'
import { SituacoesTransicoes } from './entities/situacoesTransicoes'
import { Usuarios } from './entities/usuarios'
import { Vendedores } from './entities/vendedores'
import { Newable } from './helpers/types/newable.type'
import { getRepository } from './providers/ioc'
import { IBlingRepository } from './repositories/bling.repository.interface'

/**
 * Módulo conector à API do Bling.
 *
 * @class
 * @example
 * // Constrói um novo conector
 * const accessToken = 'sua-api-key'
 * const bling = new Bling(accessToken)
 */
export default class Bling {
  #repository: IBlingRepository
  #modules: Record<string, Entity | undefined>

  /**
   * Constrói o objeto.
   *
   * @param accessToken O token de acesso à API do Bling.
   */
  constructor(accessToken: string) {
    this.#repository = getRepository(accessToken)
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
}
