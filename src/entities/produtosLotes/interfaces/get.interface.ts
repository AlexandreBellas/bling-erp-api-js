import { IStatus } from '../types/status.type'
import { IStatus12 } from '../types/status12.type'

export interface ILotesProdutoDTO {
  id: number
}

export interface ILotesDepositoDTO {
  id: number
}

export interface ILotesDTO {
  idLote: number
  codigoLote?: string
  dataFabricacao: string
  dataValidade: string
  diasPermitidoVenda?: number
  codigoAgregacao?: string
  produto: ILotesProdutoDTO
  deposito: ILotesDepositoDTO
  /**
   * `1` Ativo `2` Inativo
   */
  status?: IStatus12
}

export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
  /**
   * IDs dos lotes
   */
  idsLotes?: string[]
  /**
   * IDs dos depósitos
   */
  idsDepositos?: number[]
  /**
   * Códigos dos lotes
   */
  codigosLotes?: string[]
  /**
   * Status do lote
   */
  status?: IStatus
  /**
   * Data de validade inicial
   */
  dataValidadeInicial?: Date | string
  /**
   * Data de validade final
   */
  dataValidadeFinal?: Date | string
  /**
   * Data de fabricação inicial
   */
  dataFabricacaoInicial?: Date | string
  /**
   * Data de fabricação final
   */
  dataFabricacaoFinal?: Date | string
  /**
   * Data de inclusão inicial
   */
  dataCriacaoInicial?: Date | string
  /**
   * Data de inclusão final
   */
  dataCriacaoFinal?: Date | string
}

export interface IGetResponse {
  data?: ILotesDTO[]
}
