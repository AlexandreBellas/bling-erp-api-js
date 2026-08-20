/**
 * Codifica `client_id:client_secret` em Base64 para o header HTTP Basic.
 *
 * Usa `Buffer` no Node e `btoa` no navegador. As credenciais devem ir **apenas**
 * no header, nunca no body, conforme o Bling.
 *
 * @param clientId O client id do aplicativo.
 * @param clientSecret O client secret do aplicativo.
 *
 * @returns {string} Valor a ser usado em `Authorization: Basic …`.
 */
export function encodeBasicAuth(
  clientId: string,
  clientSecret: string
): string {
  const credentials = `${clientId}:${clientSecret}`

  if (typeof Buffer !== 'undefined') {
    return Buffer.from(credentials, 'utf8').toString('base64')
  }

  return btoa(credentials)
}
