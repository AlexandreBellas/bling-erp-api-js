import { IDefaultErrorResponse } from '../entities/@shared/interfaces/error.interface'

/**
 * Exceção lançada quando há um erro na chamada API ao Bling.
 */
export class BlingApiException extends Error {
  /** @property A resposta da requisição. */
  private readonly rawResponse: IDefaultErrorResponse

  /**
   * Constrói o objeto.
   *
   * @param response A resposta crua da requisição.
   */
  constructor(response: IDefaultErrorResponse) {
    super(response.error.description)

    this.rawResponse = response
  }

  /**
   * Obtém a resposta da requisição.
   */
  public get response() {
    return this.rawResponse
  }
}
