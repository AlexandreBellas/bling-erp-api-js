/**
 * Parâmetros para montar a URL de `GET /oauth/authorize`.
 *
 * `redirect_uri` e `scope` são opcionais na RFC; o Bling sempre usa os valores
 * cadastrados no aplicativo, mesmo quando enviados na query.
 *
 * @see https://developer.bling.com.br/aplicativos#authorization-code
 */
export interface IAuthorizationUrlParams {
  /**
   * Sequência aleatória para mitigar CSRF. Deve ser conferida no callback.
   */
  state: string

  /**
   * URL de redirecionamento. Opcional; o valor cadastrado no app prevalece.
   */
  redirectUri?: string
}
