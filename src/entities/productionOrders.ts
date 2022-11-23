import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Delete from '../core/functions/delete'

export interface IProductionOrder {
  itens: {
    item: {
      codigoProduto?: string
      nomeProduto: string
      quantidade: number
    }
  }[]
  idDepositoOrigem: number
  idDepositoDestino: number
  numero?: number
  previsaoInicio?: string // TODO: transform to Date and adapt code for that
  previsaoFinal?: string // TODO: same as above
  observacoes?: string
}

export type IProductionOrderInfos = Record<string, never>

export type IProductionOrderFilters = Record<string, never>

export interface IProductionOrderResponse {
  itens: {
    item: {
      codigoProduto?: string
      nomeProduto: string
      quantidade: number
    }
  }[]
  idDepositoOrigem: number
  idDepositoDestino: number
  numero?: number
  cliente: []
  responsavel?: string
  situacao: string // TODO: constraint values on the accepted ones
  idSituacao: string
  previsaoInicio?: string // TODO: transform to Date and adapt code for that
  previsaoFinal?: string // TODO: same as above
  dataInicio?: string // TODO: same as above
  dataFim?: string // TODO: same as above
  dataCriacao?: string // TODO: same as above
  dataAlteracao?: string // TODO: same as above
  observacoes?: string
}

export interface IProductionOrderCreateResponse {
  id: number
  numero: number
}

export interface IProductionOrderDeleteResponse {
  id: number
  numero: number
  msg: string
}

export default function ProductionOrders (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'ordemproducao',
    pluralName: 'ordensproducao'
  }

  return Object.assign(config, {
    all: new All<
      IProductionOrderResponse,
      IProductionOrderFilters,
      IProductionOrderInfos
    >().all,
    find: new Find<IProductionOrderResponse, IProductionOrderInfos>().find,
    findBy: new FindBy<
      IProductionOrderResponse,
      IProductionOrderFilters,
      IProductionOrderInfos
    >().findBy,
    create: new Create<IProductionOrder, IProductionOrderCreateResponse>()
      .create,
    delete: new Delete<IProductionOrderDeleteResponse>().delete
  })
}
