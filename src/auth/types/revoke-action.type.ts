/**
 * Ação de revogação avançada do Bling.
 *
 * - `logout`: encerra a sessão relacionada ao token informado.
 * - `uninstall`: desinstala o aplicativo no alvo informado.
 *
 * @see https://developer.bling.com.br/aplicativos#revogacao-avancada
 */
export type IRevokeAction = 'logout' | 'uninstall'
