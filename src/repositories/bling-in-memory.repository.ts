import {
  IBlingRepository,
  IDefaultHeaders,
  IDefaultParams,
  IDestroyOptions,
  IIndexOptions,
  IReplaceOptions,
  IShowOptions,
  IStoreOptions,
  IUpdateOptions
} from './bling.repository.interface'

/**
 * Repositório em memória para testes.
 */
export class InMemoryBlingRepository implements IBlingRepository {
  /** @property {any} response A resposta definida ao fazer uma requisição. */
  private response: any

  /** @property {any} indexResponse A resposta definida para o método `index`. */
  private indexResponse: any = null

  /** @property {any} showResponse A resposta definida para o método `show`. */
  private showResponse: any = null

  /** @property {any} storeResponse A resposta definida para o método `store`. */
  private storeResponse: any = null

  /** @property {any} updateResponse A resposta definida para o método `update`. */
  private updateResponse: any = null

  /** @property {any} replaceResponse A resposta definida para o método `replace`. */
  private replaceResponse: any = null

  /** @property {any} destroyResponse A resposta definida para o método `destroy`. */
  private destroyResponse: any = null

  /**
   * Define a resposta de _mock_ padrão.
   *
   * @param response A resposta a ser retornada.
   */
  public setResponse(response: any) {
    this.response = response
  }

  /**
   * Define a resposta de _mock_ para o método `index`.
   *
   * @param response A resposta a ser retornada.
   */
  public setIndexResponse(response: any) {
    this.indexResponse = response
  }

  /**
   * Define a resposta de _mock_ para o método `show`.
   *
   * @param response A resposta a ser retornada.
   */
  public setShowResponse(response: any) {
    this.showResponse = response
  }

  /**
   * Define a resposta de _mock_ para o método `store`.
   *
   * @param response A resposta a ser retornada.
   */
  public setStoreResponse(response: any) {
    this.storeResponse = response
  }

  /**
   * Define a resposta de _mock_ para o método `update`.
   *
   * @param response A resposta a ser retornada.
   */
  public setUpdateResponse(response: any) {
    this.updateResponse = response
  }

  /**
   * Define a resposta de _mock_ para o método `replace`.
   *
   * @param response A resposta a ser retornada.
   */
  public setReplaceResponse(response: any) {
    this.replaceResponse = response
  }

  /**
   * Define a resposta de _mock_ para o método `destroy`.
   *
   * @param response A resposta a ser retornada.
   */
  public setDestroyResponse(response: any) {
    this.destroyResponse = response
  }

  /**
   * @inheritdoc
   */
  async index<
    IIndexBody,
    IIndexResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IIndexOptions<IIndexBody, IParams, IHeaders>
  ): Promise<IIndexResponse> {
    return this.indexResponse ?? this.response
  }

  /**
   * @inheritdoc
   */
  async show<
    IShowResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IShowOptions<IParams, IHeaders>): Promise<IShowResponse> {
    return this.showResponse ?? this.response
  }

  /**
   * @inheritdoc
   */
  async store<
    IStoreBody,
    IStoreResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IStoreOptions<IStoreBody, IParams, IHeaders>
  ): Promise<IStoreResponse> {
    return this.storeResponse ?? this.response
  }

  /**
   * @inheritdoc
   */
  async update<
    IUpdateBody,
    IUpdateResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IUpdateOptions<IUpdateBody, IParams, IHeaders>
  ): Promise<IUpdateResponse> {
    return this.updateResponse ?? this.response
  }

  /**
   * @inheritdoc
   */
  async replace<
    IReplaceBody,
    IReplaceResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IReplaceOptions<IReplaceBody, IParams, IHeaders>
  ): Promise<IReplaceResponse> {
    return this.replaceResponse ?? this.response
  }

  /**
   * @inheritdoc
   */
  async destroy<
    IDestroyResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IDestroyOptions<IParams, IHeaders>): Promise<IDestroyResponse> {
    return this.destroyResponse ?? this.response
  }
}
