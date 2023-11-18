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

  /**
   * Define a resposta de _mock_ padrão.
   *
   * @param response A resposta a ser retornada.
   */
  public setResponse(response: any) {
    this.response = response
  }

  /**
   * @inheritdoc
   */
  async index<
    IIndexResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IIndexOptions<IParams, IHeaders>): Promise<IIndexResponse> {
    return this.response
  }

  /**
   * @inheritdoc
   */
  async show<
    IShowResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IShowOptions<IParams, IHeaders>): Promise<IShowResponse> {
    return this.response
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
    return this.response
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
    return this.response
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
    return this.response
  }

  /**
   * @inheritdoc
   */
  async destroy<
    IDestroyResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IDestroyOptions<IParams, IHeaders>): Promise<IDestroyResponse> {
    return this.response
  }
}
