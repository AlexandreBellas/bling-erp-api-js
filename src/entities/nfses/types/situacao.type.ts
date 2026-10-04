/**
 * Tipagem referente à situação de uma nota fiscal de serviço eletrônica.
 *
 * - `0`: Pendente
 * - `1`: Emitida
 * - `2`: Disponível para consulta
 * - `3`: Cancelada
 */
export type ISituacaoNfse = 0 | 1 | 2 | 3

/**
 * Filtro de situação na listagem de NFS-e.
 *
 * - `1`: Emitida
 * - `2`: Disponível para consulta
 * - `3`: Cancelada
 * - `4`: Valor aceito apenas na query da listagem
 */
export type ISituacaoNfseFiltro = 1 | 2 | 3 | 4
