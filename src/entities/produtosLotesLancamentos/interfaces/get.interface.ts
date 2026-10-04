import { ITipoLancamento } from '../types/tipo-lancamento.type'

export interface ILoteLancamentoDTO {
  /**
   * ID do lancamento do lote
   */
  id?: number
  /**
   * ID do lote
   */
  idLote: number
  /**
   * Quantidade do lote
   */
  quantidade?: number
  /**
   * Tipo de lançamento `1` Entrada `2` Saída `3` Balanço
   */
  tipoLancamento?: ITipoLancamento
  /**
   * Data de lançamento
   */
  data?: string
  /**
   * ID da origem
   */
  idOrigem?: number
  /**
   * Observação do lote
   */
  observacao: string
}

export interface IGetParams {
  /**
   * ID do lote
   */
  idLote: number
}

export interface IGetResponse {
  data?: ILoteLancamentoDTO[]
}
