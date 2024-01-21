/**
 * Tipagem referente ao tipo de frete.
 *
 * - `0`: Contratação do Frete por conta do Remetente (CIF)
 * - `1`: Contratação do Frete por conta do Destinatário (FOB)
 * - `2`: Contratação do Frete por conta de Terceiros
 * - `3`: Transporte Próprio por conta do Remetente
 * - `4`: Transporte Próprio por conta do Destinatário
 * - `9`: Sem Ocorrência de Transporte
 */
type IFretePorConta = 0 | 1 | 2 | 3 | 4 | 9

export default IFretePorConta
