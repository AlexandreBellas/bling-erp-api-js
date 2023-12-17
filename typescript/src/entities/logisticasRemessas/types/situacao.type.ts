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
 * - `5`: Etiqueta comprada
 * - `6`: Etiqueta parcialmente comprada
 */
export type ISituacao = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
