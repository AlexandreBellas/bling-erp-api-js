/**
 * URL base padrão da API de recursos do Bling.
 */
export const DEFAULT_API_BASE_URL = 'https://api.bling.com.br/Api/v3'

/**
 * URL base padrão dos endpoints OAuth (`/oauth/authorize`, `/oauth/token`, `/oauth/revoke`).
 *
 * O host de autorização documentado pelo Bling é `www.bling.com.br`; token e revoke
 * também são aceitos nesse origin com o prefixo `/Api/v3`.
 */
export const DEFAULT_OAUTH_BASE_URL = 'https://www.bling.com.br/Api/v3'
