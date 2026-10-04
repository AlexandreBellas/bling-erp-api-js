/**
 * Tipagem referente à situação de uma remessa de uma logística.
 *
 * - `-3`: A ser corrigida
 * - `-2`: Em processamento
 * - `-1`: Cancelado
 * - `0`: Em aberto
 * - `1`: Emitido
 * - `2`: Pronto para envio
 * - `3`: Despachado
 * - `4`: Pronto para envio
 */
export type ISituacao = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4

/**
 * Tipagem referente ao filtro de situação da listagem de remessas por logística.
 *
 * Além de {@link ISituacao}, a query aceita `-4`, `5` (etiqueta comprada) e
 * `6` (etiqueta parcialmente comprada).
 */
export type ISituacaoFiltro = ISituacao | -4 | 5 | 6
