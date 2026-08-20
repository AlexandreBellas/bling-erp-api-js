/**
 * Alvo da revogação avançada do Bling.
 *
 * - `user`: apenas o usuário relacionado ao token (padrão no Bling).
 * - `company`: todos os tokens da empresa.
 *
 * @see https://developer.bling.com.br/aplicativos#revogacao-avancada
 */
export type IRevokeTarget = 'user' | 'company'
