import { IPadraoDefinicao } from '../types/padrao-definicao.type'

export interface ISetDefaultParams {
  /**
   * ID da forma de pagamento
   */
  idFormaPagamento: number
}

export interface ISetDefaultBody {
  padrao: IPadraoDefinicao
}
