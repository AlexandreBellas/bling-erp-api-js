import BlingEntity from '../core/entity'
import { AxiosInstance as IAxiosInstance } from 'axios'

export interface IPurchaseOrder {
  numeropedido?: string
  datacompra?: string
  dataprevista?: string
  ordemcompra?: string
  desconto?: string
  observacoes?: string
  observacaointerna?: string
  idcategoria?: number
  fornecedor: {
    id?: number
    nome: string
    tipopessoa?: 'F' | 'J' | 'E'
    cpfcnpj?: string
    ie?: string
    rg?: string
    contribuinte?: '1' | '2' | '9'
    endereco?: string
    endereconro?: string
    complemento?: string
    bairro?: string
    cep?: string
    cidade?: string
    uf?: string
    fone?: string
    celular?: string
    email?: string
    transporte?: {
      transportador?: string
      freteporconta?: string
      qtdvolumes?: number
      frete?: number
    }
    itens: {
      item: {
        codigo?: string
        descricao: string
        un?: 'pc' | 'un' | 'cx'
        qtde: number
        valor: number
      }[]
    }
    parcelas?: {
      parcela?: {
        nrodias: number
        valor: number
        obs?: string
        idformapagamento: number
      }[]
    }
  }
}

export interface IPurchaseOrderFilters {
  dataEmissao?: string
  situacao?: '0' | '1' | '2' | '3'
}

export type IPurchaseOrderResponse = IPurchaseOrder

export default class PurchaseOrders extends BlingEntity<
  IPurchaseOrder,
  IPurchaseOrderFilters,
  Record<string, never>,
  IPurchaseOrder
> {
  constructor (api: IAxiosInstance, apiKey: string) {
    super(api, apiKey)

    this.singularName = 'pedidocompra'
    this.pluralName = 'pedidoscompra'
  }
}
