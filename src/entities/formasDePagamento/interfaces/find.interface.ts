import ISituacao from 'src/entities/@shared/types/situacao.type'
import { IBandeiraCartao } from '../types/bandeira-cartao.type'
import { IDestino } from '../types/destino.type'
import { IFinalidade } from '../types/finalidade.type'
import { IPadrao } from '../types/padrao.type'
import { ITipoCartao } from '../types/tipo-cartao.type'
import { ITipoPagamento } from '../types/tipo-pagamento.type'

export interface IFindParams {
  /**
   * ID da forma de pagamento
   */
  idFormaPagamento: number
}

export interface IFindResponse {
  data: {
    id: number
    descricao: string
    tipoPagamento: ITipoPagamento
    situacao: ISituacao
    fixa: boolean
    padrao: IPadrao
    condicao: string
    destino: IDestino
    finalidade: IFinalidade
    taxas: {
      aliquota: number
      valor: number
      prazo: number
    }
    dadosCartao?: {
      bandeira: IBandeiraCartao
      tipo: ITipoCartao
      cnpjCredenciadora: string
    }
  }
}
