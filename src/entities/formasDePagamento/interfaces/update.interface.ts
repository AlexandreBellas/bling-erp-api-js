import ISituacao from 'src/entities/@shared/types/situacao.type'
import { IBandeiraCartao } from '../types/bandeira-cartao.type'
import { IDestino } from '../types/destino.type'
import { IFinalidade } from '../types/finalidade.type'
import { IPadrao } from '../types/padrao.type'
import { ITipoCartao } from '../types/tipo-cartao.type'
import { ITipoPagamento } from '../types/tipo-pagamento.type'

export interface IUpdateParams {
  /**
   * ID da forma de pagamento
   */
  idFormaPagamento: number
}

export interface IUpdateBody {
  descricao: string
  tipoPagamento: ITipoPagamento
  situacao?: ISituacao
  padrao?: IPadrao
  condicao?: string
  destino: IDestino
  finalidade: IFinalidade
  taxas?: {
    aliquota?: number
    valor?: number
    prazo?: number
  }
  dadosCartao?: {
    bandeira: IBandeiraCartao
    tipo: ITipoCartao
    cnpjCredenciadora?: string
  }
}

export interface IUpdateResponse {
  data: { id: number }
}
