/**
 * Estratégia de autenticação usada pelo repositório HTTP.
 *
 * O repositório não ramifica em `auth.method`; apenas delega headers e o
 * tratamento de `401`.
 */
export interface IAuthProvider {
  /**
   * Preenche headers de autenticação da requisição de recurso.
   *
   * @param headers Mapa mutável de headers (chave → valor).
   */
  applyRequestHeaders(headers: Record<string, string>): void

  /**
   * Garante um access token utilizável antes de enviar a requisição.
   *
   * Usado no cold start quando só há `refreshToken`.
   */
  ensureFreshToken?(): Promise<void>

  /**
   * Tenta recuperar de um `401`. Deve retornar `true` se a requisição original
   * puder ser repetida uma vez (por exemplo, após refresh).
   */
  handleUnauthorized?(): Promise<boolean>
}
