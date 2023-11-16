'use strict'

import { Borderos } from './entities/borderos'
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

  #borderos: Borderos | undefined

  /**
   * Constrói o objeto.
   *
   * @param accessToken O token de acesso à API do Bling.
   */
  constructor(accessToken: string) {
    this.#repository = getRepository(accessToken)
  }

  /**
   * Obtém a instância de interação com Borderôs.
   */
  public get borderos() {
    if (!this.#borderos) {
      this.#borderos = new Borderos(this.#repository)
    }

    return this.#borderos
  }
}
