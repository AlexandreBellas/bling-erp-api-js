import { request } from 'node:https';
import { IncomingMessage } from 'node:http';
import { URL, URLSearchParams } from 'node:url';
import { BlingApiException } from '../exceptions/bling-api.exception';
import { BlingInternalException } from '../exceptions/bling-internal.exception';
import {
  IBlingRepository,
  IDefaultHeaders,
  IDefaultParams,
  IDestroyOptions,
  IIndexOptions,
  IReplaceOptions,
  IShowOptions,
  IStoreOptions,
  IUpdateOptions,
} from './bling.repository.interface';

interface IBlingRepositoryProps {
  /**
   * A URL base para chamada da API.
   */
  baseUrl: string;

  /**
   * O _token_ de autenticação.
   */
  accessToken: string;
}

/**
 * Repositório para acesso à API do Bling.
 */
export class BlingRepository implements IBlingRepository {
  /**
   * Constrói o objeto.
   *
   * @param props As propriedades da classe.
   */
  public constructor(
    /** @property Propriedades da classe. */
    private readonly props: IBlingRepositoryProps,
  ) { }

  private async call<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    endpoint: string,
    options: {
      params?: IDefaultParams;
      headers?: IDefaultHeaders;
      data?: unknown;
    },
  ): Promise<T> {
    const urlObject = new URL(`${this.props.baseUrl}${endpoint}`);

    if (options.params) {
      urlObject.search = new URLSearchParams(
        options.params as Record<string, string | readonly string[]>,
      ).toString();
    }

    return new Promise<T>((resolve, reject) => {
      const req = request(
        urlObject,
        {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
            Authorization: `Bearer ${this.props.accessToken}`,
          },
        },
        (res: IncomingMessage) => {
          const chunks: Array<Uint8Array> = [];

          res.on('data', chunk => chunks.push(chunk));

          res.on('end', () => {
            const data = Buffer.concat(chunks).toString();
            const parsedData = JSON.parse(data);

            if (res.statusCode?.toString().startsWith('2')) {
              resolve(
                options.headers?.shouldIncludeHeadersInResponse
                  ? { headers: res.headers, ...parsedData }
                  : parsedData,
              );
            } else {
              reject(new BlingApiException(parsedData));
            }
          });
        },
      );

      req.on('error', () => {
        reject(
          new BlingInternalException(
            `Não foi possível realizar a chamada HTTP: ${method} ${endpoint}`,
          ),
        );
      });

      if (options.data) {
        req.write(JSON.stringify(options.data));
      }

      req.end();
    });
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
    IHeaders extends IDefaultHeaders = IDefaultHeaders,
  >(
    options: IIndexOptions<IIndexBody, IParams, IHeaders>,
  ): Promise<IIndexResponse> {
    return this.call<IIndexResponse>('GET', `${options.endpoint}`, {
      params: options.params,
      headers: options.headers,
      data: options.body,
    });
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async show<
    IShowResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders,
  >(options: IShowOptions<IParams, IHeaders>): Promise<IShowResponse> {
    const endpoint = `${options.endpoint}/${options.id}`;
    return this.call<IShowResponse>('GET', endpoint, {
      params: options.params,
      headers: options.headers,
    });
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
    IHeaders extends IDefaultHeaders = IDefaultHeaders,
  >(
    options: IStoreOptions<IStoreBody, IParams, IHeaders>,
  ): Promise<IStoreResponse> {
    return this.call<IStoreResponse>('POST', `${options.endpoint}`, {
      params: options.params,
      headers: options.headers,
      data: options.body,
    });
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
    IHeaders extends IDefaultHeaders = IDefaultHeaders,
  >(
    options: IUpdateOptions<IUpdateBody, IParams, IHeaders>,
  ): Promise<IUpdateResponse> {
    const endpoint = `${options.endpoint}/${options.id}`;
    return this.call<IUpdateResponse>('PATCH', endpoint, {
      params: options.params,
      headers: options.headers,
      data: options.body,
    });
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
    IHeaders extends IDefaultHeaders = IDefaultHeaders,
  >(
    options: IReplaceOptions<IReplaceBody, IParams, IHeaders>,
  ): Promise<IReplaceResponse> {
    const endpoint = `${options.endpoint}/${options.id}`;
    return this.call<IReplaceResponse>('PATCH', endpoint, {
      params: options.params,
      headers: options.headers,
      data: options.body,
    });
  }

  /**
   * @inheritDoc
   *
   * @throws {BlingApiException|BlingInternalException}
   */
  public async destroy<
    IDestroyResponse,
    IParams extends IDefaultParams = IDefaultParams,
    IHeaders extends IDefaultHeaders = IDefaultHeaders,
  >(options: IDestroyOptions<IParams, IHeaders>): Promise<IDestroyResponse> {
    const endpoint = `${options.endpoint}/${options.id}`;
    return this.call<IDestroyResponse>('DELETE', endpoint, {
      params: options.params,
      headers: options.headers,
    });
  }
}
