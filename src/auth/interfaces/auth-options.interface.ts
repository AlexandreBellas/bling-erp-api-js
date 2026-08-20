import { IBlingTokenSet } from './token-set.interface'

/**
 * Autenticação com um JWT já obtido pelo consumidor.
 *
 * A biblioteca apenas anexa `Authorization: Bearer` e `enable-jwt: 1` nas
 * chamadas de recurso. Não há troca nem renovação de token.
 */
export interface IJwtAuthOptions {
  method: 'jwt'
  accessToken: string
}

/**
 * Autenticação com um token opaco legado já obtido pelo consumidor.
 *
 * A biblioteca anexa apenas `Authorization: Bearer`. Tokens opacos estão
 * descontinuados no Bling; prefira `method: 'jwt'` ou `method: 'oauth'`.
 *
 * @see https://developer.bling.com.br/migracao-jwt
 */
export interface IOpaqueAuthOptions {
  method: 'opaque'
  accessToken: string
}

/**
 * Cliente OAuth 2.0 (grant `authorization_code` + `refresh_token` + revoke).
 *
 * **Uso apenas no servidor.** `clientSecret` não deve ser exposto no navegador.
 * A biblioteca sempre envia `enable-jwt: 1` em `POST /oauth/token` e nas
 * chamadas de recurso resultantes.
 *
 * @see https://developer.bling.com.br/aplicativos#fluxo-de-autoriza%C3%A7%C3%A3o
 * @see https://developer.bling.com.br/migracao-jwt
 */
export interface IOAuthAuthOptions {
  method: 'oauth'
  clientId: string
  clientSecret: string

  /**
   * Origin dos endpoints OAuth. Padrão: `https://www.bling.com.br/Api/v3`.
   */
  oauthBaseUrl?: string

  accessToken?: string
  refreshToken?: string

  /**
   * Se verdadeiro, um `401` em recurso dispara `refresh_token` e uma nova tentativa.
   * Padrão: `true` quando há `refreshToken` (ou após um exchange bem-sucedido).
   */
  autoRefresh?: boolean

  /**
   * Chamado após cada resposta bem-sucedida de `/oauth/token` para persistir
   * os JWTs (tipicamente 1.500–3.000 caracteres).
   */
  onTokens?: (tokens: IBlingTokenSet) => void | Promise<void>
}

/**
 * União discriminada das estratégias de autenticação.
 */
export type IBlingAuthOptions =
  | IJwtAuthOptions
  | IOpaqueAuthOptions
  | IOAuthAuthOptions

/**
 * Opções de construção de `Bling.create`.
 */
export interface IBlingOptions<
  TAuth extends IBlingAuthOptions = IBlingAuthOptions
> {
  /**
   * URL base da API de recursos. Padrão: `https://api.bling.com.br/Api/v3`.
   */
  baseUrl?: string

  auth: TAuth
}
