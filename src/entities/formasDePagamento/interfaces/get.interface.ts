import ISituacao from 'src/entities/@shared/types/situacao.type'
import { IPadrao } from '../types/padrao.type'
import { ITipoPagamento } from '../types/tipo-pagamento.type'
import { IFinalidade } from '../types/finalidade.type'

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
   * Descrição da forma de pagamento
   */
  descricao?: string
  /**
   *
   */
  tiposPagamentos?: ITipoPagamento[]
  /**
   *
   */
  situacao?: ISituacao
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    tipoPagamento: ITipoPagamento
    situacao?: ISituacao
    fixa?: boolean
    padrao?: IPadrao
    finalidade: IFinalidade
  }[]
}
