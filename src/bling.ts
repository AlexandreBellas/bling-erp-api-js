'use strict'

import { Entity } from './entities/@shared/entity'
import { Borderos } from './entities/borderos'
import { CamposCustomizados } from './entities/camposCustomizados'
import { CategoriasLojas } from './entities/categoriasLojas'
import { CategoriasProdutos } from './entities/categoriasProdutos'
import { CategoriasReceitasDespesas } from './entities/categoriasReceitasDespesas'
import { ContasContabeis } from './entities/contasContabeis'
import { ContasPagar } from './entities/contasPagar'
import { ContasReceber } from './entities/contasReceber'
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
}
