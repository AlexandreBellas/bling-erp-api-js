import IFretePorConta from 'src/entities/@shared/types/frete-por-conta.type'
import { IDescontoUnidade } from '../types/desconto-unidade.type'
import { ISituacao } from '../types/situacao.type'

export interface IFindParams {
  /**
   * ID do pedido de compra
   */
  idPedidoCompra: number
}

export interface IFindResponse {
  data: {
    id?: number
    numero?: number
    data?: string
    dataPrevista?: string
    totalProdutos?: number
    total?: number
    fornecedor: { id: number }
    situacao?: { valor: ISituacao }
    ordemCompra: string
    observacoes?: string
    observacoesInternas?: string
    desconto?: {
      valor: number
      unidade?: IDescontoUnidade
    }
    categoria?: { id: number }
    tributacao?: {
      totalICMS?: number
      totalIPI?: number
    }
    transporte?: {
      frete?: number
      transportador?: string
      fretePorConta?: IFretePorConta
      pesoBruto?: number
      volumes?: number
    }
    itens: {
      descricao: string
      codigoFornecedor?: string
      unidade?: string
      valor: number
      quantidade?: number
      aliquotaIPI?: number
      descricaoDetalhada?: string
      produto?: {
        id: number
        codigo?: string
      }
    }[]
    parcelas?: {
      valor: number
      dataVencimento: string
      observacao?: string
      formaPagamento?: { id: number }
    }[]
  }
}
