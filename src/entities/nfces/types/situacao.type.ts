/**
 * Tipagem referente à uma situação de NFC-e.
 *
 * - `1`: Pendente
 * - `2`: Cancelada
 * - `3`: Aguardando recibo
 * - `4`: Rejeitada
 * - `5`: Autorizada
 * - `6`: Emitida DANFE
 * - `7`: Registrada
 * - `8`: Aguardando protocolo
 * - `9`: Denegada
 * - `10`: Consulta situação
 * - `11`: Bloqueada
 */
export type ISituacaoNfce = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

/**
 * Filtro de situação na listagem de NFC-e.
 *
 * Inclui `12`, aceito apenas na query da listagem.
 */
export type ISituacaoNfceFiltro = ISituacaoNfce | 12
