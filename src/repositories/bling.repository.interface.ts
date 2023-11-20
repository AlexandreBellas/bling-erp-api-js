/**
 * Tipo padrão de _query parameters_.
 */
export type IDefaultParams = Record<string, number | string | Date | undefined>

/**
 * Tipo padrão de _headers_.
 */
export type IDefaultHeaders = Record<string, string>

/**
 * Opções padrões para uma chamada API.
 */
export interface IDefaultOptions<IParams, IHeaders> {
  endpoint: string
  params?: IParams
  headers?: IHeaders
}

/**
 * Opções para uma chamada do tipo _index_.
 */
export type IIndexOptions<IParams, IHeaders> = IDefaultOptions<
  IParams,
  IHeaders
>

/**
 * Opções para uma chamada do tipo _show_.
 */
export interface IShowOptions<IParams, IHeaders>
  extends IDefaultOptions<IParams, IHeaders> {
  id: string
}

/**
 * Opções para uma chamada do tipo _store_.
 */
export interface IStoreOptions<IBody, IParams, IHeaders>
  extends IDefaultOptions<IParams, IHeaders> {
  body: IBody
}

/**
 * Opções para uma chamada do tipo _update_.
 */
export interface IUpdateOptions<IBody, IParams, IHeaders>
  extends IDefaultOptions<IParams, IHeaders> {
  id: string
  body: IBody
}

/**
 * Opções para uma chamada do tipo _replace_.
 */
export interface IReplaceOptions<IBody, IParams, IHeaders>
  extends IDefaultOptions<IParams, IHeaders> {
  id: string
  body: IBody
}

/**
 * Opções para uma chamada do tipo _destroy_.
 */
export interface IDestroyOptions<IParams, IHeaders>
  extends IDefaultOptions<IParams, IHeaders> {
  id: string
}

/**
 * Interface padrão de implementação de chamada da API do Bling.
 */
export interface IBlingRepository {
  /**
   * Realiza uma chamada GET **sem** a identificação de um recurso.
   *
   * @param options Opções da chamada de API.
   */
  index: <
    IIndexResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IIndexOptions<IParams, IHeaders>
  ) => Promise<IIndexResponse>

  /**
   * Realiza uma chamada GET **com** a identificação de um recurso.
   *
   * @param options Opções da chamada de API.
   */
  show: <
    IShowResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IShowOptions<IParams, IHeaders>
  ) => Promise<IShowResponse>

  /**
   * Realiza uma chamada POST para criação de um recurso.
   *
   * @param options Opções da chamada de API.
   */
  store: <
    IStoreBody,
    IStoreResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IStoreOptions<IStoreBody, IParams, IHeaders>
  ) => Promise<IStoreResponse>

  /**
   * Realiza uma chamada PATCH para a atualização de um recurso.
   *
   * @param options Opções da chamada de API.
   */
  update: <
    IUpdateBody,
    IUpdateResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IUpdateOptions<IUpdateBody, IParams, IHeaders>
  ) => Promise<IUpdateResponse>

  /**
   * Realiza uma chamada PUT para a atualização de um recurso.
   *
   * @param options Opções da chamada de API.
   */
  replace: <
    IReplaceBody,
    IReplaceResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IReplaceOptions<IReplaceBody, IParams, IHeaders>
  ) => Promise<IReplaceResponse>

  /**
   * Realiza uma chamada DELETE para deleção de um recurso.
   *
   * @param options Opções da chamada de API.
   */
  destroy: <
    IDestroyResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IDestroyOptions<IParams, IHeaders>
  ) => Promise<IDestroyResponse>
}
