import { IRevokeAction } from '../types/revoke-action.type'
import { IRevokeTarget } from '../types/revoke-target.type'
import { ITokenTypeHint } from '../types/token-type-hint.type'

/**
 * Opções de `POST /oauth/revoke` (revogação simples e avançada).
 *
 * @see https://developer.bling.com.br/aplicativos#revogando-o-access-token
 * @see https://developer.bling.com.br/aplicativos#revogacao-avancada
 */
export interface IRevokeOptions {
  /**
   * Token a ser revogado (`access_token` ou `refresh_token`).
   */
  token: string

  /**
   * Dica do tipo do token. Valores: `access_token` ou `refresh_token`.
   */
  tokenTypeHint?: ITokenTypeHint

  /**
   * Ação avançada. Valores: `logout` ou `uninstall`.
   * Se omitida, apenas o token informado é revogado.
   */
  revokeAction?: IRevokeAction

  /**
   * Alvo avançado. Valores: `user` (padrão no Bling) ou `company`.
   */
  revokeTarget?: IRevokeTarget
}
