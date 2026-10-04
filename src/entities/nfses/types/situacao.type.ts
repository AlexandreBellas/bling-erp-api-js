/**
 * Tipagem referente à situação de uma nota fiscal de serviço eletrônica.
 *
 * - `0`: Pendente
 * - `1`: Emitida
 * - `2`: Disponível para consulta
 * - `3`: Cancelada
 * - `4`: Valor presente no enum da referência, sem descrição
 */
export type ISituacaoNfse = 0 | 1 | 2 | 3 | 4
