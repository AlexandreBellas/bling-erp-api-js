/**
 * Conjunto de tokens retornado por `POST /oauth/token`.
 *
 * Tokens JWT do Bling têm tipicamente 1.500 a 3.000 caracteres; persista o JSON
 * completo sem interpretar o payload.
 *
 * @see https://developer.bling.com.br/aplicativos#tokens-de-acesso
 * @see https://developer.bling.com.br/migracao-jwt
 */
export interface IBlingTokenSet {
  access_token: string
  token_type?: string
  expires_in?: number
  refresh_token?: string
  scope?: string
}
