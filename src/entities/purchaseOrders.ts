import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

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
    nome?: string
    tipopessoa?: 'F' | 'J' | 'E'
    cpfcnpj?: string // used if !!id
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
  }
  transporte?: {
    transportador?: string
    freteporconta?: 'R' | 'D' | 'T' | '3' | '4' | 'S'
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

export interface IPurchaseOrderUpdateContent {
  situacao: '0' | '1' | '2' | '3'
}

export interface IPurchaseOrderFilters {
  dataEmissao?: string
  situacao?: '0' | '1' | '2' | '3'
}

export type IPurchaseOrderInfos = Record<string, never>

export interface IPurchaseOrderResponse {
  numeropedido: string
  datacompra: string
  dataprevista?: string
  ordemcompra?: string
  desconto?: string
  observacoes?: string
  observacaointerna?: string
  fornecedor: {
    id: string
    nome: string
    tipopessoa: 'F' | 'J' | 'E'
    cpfcnpj?: string
    ie?: string
    rg?: string
    contribuinte: '1' | '2' | '9'
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
  }
  itens: {
    item: {
      codigo?: string
      codigofornecedor?: string
      descricao: string
      un?: string
      qtde: number
      valor: number
    }
  }[]
  transporte: {
    transportador?: string
    freteporconta: 'R' | 'D' | 'T' | '3' | '4' | 'S'
    qtdvolumes: string
    frete: number
  }
  categoria: {
    id: number
    descricao: string
  }
}

export interface IPurchaseOrderCreateResponse {
  id: number
  numeropedido: number
  mensagens?: {
    mensagem: string
  }[]
}

export interface IPurchaseOrderUpdateResponse {
  numero: string
  mensagem: string
}

export default function PurchaseOrders (api: IApiInstance) {
  const config = {
    api,
    singularName: 'pedidocompra',
    pluralName: 'pedidoscompra'
  }

  return Object.assign(config, {
    // @TODO: enhance this meme response from all() method
    all: new All<
      IPurchaseOrderResponse[],
      IPurchaseOrderFilters,
      IPurchaseOrderInfos
    >().all,
    find: new Find<IPurchaseOrderResponse, IPurchaseOrderInfos>().find,
    findBy: new FindBy<
      IPurchaseOrderResponse,
      IPurchaseOrderFilters,
      IPurchaseOrderInfos
    >().findBy,
    create: new Create<IPurchaseOrder, IPurchaseOrderCreateResponse>().create,
    update: new Update<
      IPurchaseOrderUpdateContent,
      IPurchaseOrderUpdateResponse
    >().update
  })
}
