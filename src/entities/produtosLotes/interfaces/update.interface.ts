export interface IUpdateParams {
  /**
   * ID idLote
   */
  idLote: number
}

export interface IUpdateBody {
  codigoLote?: string
  dataFabricacao?: string
  dataValidade?: string
  diasPermitidoVenda?: number
  codigoAgregacao?: string
}
