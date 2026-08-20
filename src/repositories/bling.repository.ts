import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios'
import { IAuthProvider } from '../auth/interfaces/auth-provider.interface'
import { IDefaultErrorResponse } from '../entities/@shared/interfaces/error.interface'
import { BlingApiException } from '../exceptions/bling-api.exception'
import { BlingInternalException } from '../exceptions/bling-internal.exception'
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

interface IBlingRepositoryProps {
  /**
   * A URL base para chamada da API.
   */
  baseUrl: string

  /**
   * Estratégia de autenticação (headers e refresh em 401).
   */
  authProvider: IAuthProvider
}

interface IRetriableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

/**
 * Repositório para acesso à API do Bling.
 */
export class BlingRepository implements IBlingRepository {
  /** @property Propriedades da classe. */
  private props: IBlingRepositoryProps

  /** @property A instância `axios` para chamadas API. */
  private api: AxiosInstance

  /**
   * Constrói o objeto.
   *
   * @param props As propriedades da classe.
   */
  constructor(props: IBlingRepositoryProps) {
    this.props = props

    this.api = axios.create({
      baseURL: this.props.baseUrl
    })

    this.api.interceptors.request.use(async (config) => {
      await this.props.authProvider.ensureFreshToken?.()

      const applied: Record<string, string> = {}
      this.props.authProvider.applyRequestHeaders(applied)

      if (!config.headers) {
        return config
      }

      for (const key in applied) {
        if (Object.prototype.hasOwnProperty.call(applied, key)) {
          config.headers.set(key, applied[key])
        }
      }

      return config
    })

    this.api.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<IDefaultErrorResponse>) => {
        const config = error.config as IRetriableRequestConfig | undefined
        const handleUnauthorized = this.props.authProvider.handleUnauthorized
        const canRetry =
          error.response?.status === 401 &&
          Boolean(config) &&
          !config?._retry &&
          typeof handleUnauthorized === 'function'

        if (!canRetry || !config || !handleUnauthorized) {
          return await Promise.reject(error)
        }

        config._retry = true

        let refreshed = false
        try {
          refreshed = await handleUnauthorized()
        } catch {
          // refresh attempt failed; fall through and surface the original 401
        }

        if (!refreshed) {
          return await Promise.reject(error)
        }

        return await this.api.request(config)
      }
    )
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async index<
    IIndexBody,
    IIndexResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IIndexOptions<IIndexBody, IParams, IHeaders>
  ): Promise<IIndexResponse> {
    return await this.api
      .get<IIndexResponse>(
        `${options.endpoint}`,
        this.buildAxiosConfig({
          params: options.params,
          headers: options.headers,
          data: options.body
        })
      )
      .then((response) =>
        options.shouldIncludeHeadersInResponse
          ? {
              headers: response.headers,
              ...response.data
            }
          : response.data
      )
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, options.endpoint)
      )
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async show<
    IShowResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IShowOptions<IParams, IHeaders>): Promise<IShowResponse> {
    const endpoint = `${options.endpoint}/${options.id}`
    return await this.api
      .get<IShowResponse>(
        endpoint,
        this.buildAxiosConfig({
          params: options.params,
          headers: options.headers
        })
      )
      .then((response) =>
        options.shouldIncludeHeadersInResponse
          ? {
              headers: response.headers,
              ...response.data
            }
          : response.data
      )
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, endpoint)
      )
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async store<
    IStoreBody,
    IStoreResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IStoreOptions<IStoreBody, IParams, IHeaders>
  ): Promise<IStoreResponse> {
    return await this.api
      .post<IStoreResponse>(
        `${options.endpoint}`,
        options.body,
        this.buildAxiosConfig({
          params: options.params,
          headers: options.headers
        })
      )
      .then((response) =>
        options.shouldIncludeHeadersInResponse
          ? {
              headers: response.headers,
              ...response.data
            }
          : response.data
      )
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, options.endpoint)
      )
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async update<
    IUpdateBody,
    IUpdateResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IUpdateOptions<IUpdateBody, IParams, IHeaders>
  ): Promise<IUpdateResponse> {
    const endpoint = `${options.endpoint}/${options.id}`
    return await this.api
      .patch<IUpdateResponse>(
        endpoint,
        options.body,
        this.buildAxiosConfig({
          params: options.params,
          headers: options.headers
        })
      )
      .then((response) =>
        options.shouldIncludeHeadersInResponse
          ? {
              headers: response.headers,
              ...response.data
            }
          : response.data
      )
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, endpoint)
      )
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async replace<
    IReplaceBody,
    IReplaceResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(
    options: IReplaceOptions<IReplaceBody, IParams, IHeaders>
  ): Promise<IReplaceResponse> {
    const endpoint = `${options.endpoint}/${options.id}`
    return await this.api
      .patch<IReplaceResponse>(
        endpoint,
        options.body,
        this.buildAxiosConfig({
          params: options.params,
          headers: options.headers
        })
      )
      .then((response) =>
        options.shouldIncludeHeadersInResponse
          ? {
              headers: response.headers,
              ...response.data
            }
          : response.data
      )
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, endpoint)
      )
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async destroy<
    IDestroyResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders
  >(options: IDestroyOptions<IParams, IHeaders>): Promise<IDestroyResponse> {
    const endpoint = `${options.endpoint}/${options.id}`
    return await this.api
      .delete<IDestroyResponse>(
        endpoint,
        this.buildAxiosConfig({
          params: options.params,
          headers: options.headers
        })
      )
      .then((response) =>
        options.shouldIncludeHeadersInResponse
          ? {
              headers: response.headers,
              ...response.data
            }
          : response.data
      )
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, endpoint)
      )
  }

  /**
   * Monta o config do axios omitindo propriedades `undefined`.
   *
   * @param options Params, headers e body opcionais.
   *
   * @returns {AxiosRequestConfig}
   */
  private buildAxiosConfig(options: {
    params?: IDefaultParams | undefined
    headers?: IDefaultHeaders | undefined
    data?: unknown
  }): AxiosRequestConfig {
    const config: AxiosRequestConfig = {}

    if (options.params !== undefined) {
      config.params = options.params
    }

    if (options.headers !== undefined) {
      config.headers = options.headers
    }

    if (options.data !== undefined) {
      config.data = options.data
    }

    return config
  }

  /**
   * Trata os erros da API de forma padrão.
   *
   * @param rawError Erro do axios.
   * @param endpoint _Endpoint_ de chamada.
   *
   * @returns {never}
   * @throws {BlingApiException|BlingInternalException}
   */
  private defaultCatchBehavior(
    rawError: AxiosError<IDefaultErrorResponse>,
    endpoint: string
  ): never {
    const data = rawError.response?.data

    if (!data) {
      throw new BlingInternalException(
        `Não foi possível realizar a chamada HTTP: ${rawError.config?.method} ${endpoint}`
      )
    }

    throw new BlingApiException(data)
  }
}
