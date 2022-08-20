import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'

import IUFs from './types/uf'

type ISituacaoNumber = '0' | '1' | '2' | '3'

type ISituacaoName = 'Todas' | 'Pendente' | 'Emitida' | 'Cancelada'

export interface IServiceInvoice {
  data?: Date
  vendedor?: string
  numero_rps?: string
  reter_iss?: 'S' | 'N'
  desconto?: number
  cliente: {
    nome: string
    cnpj: string
    ie?: string
    im?: string
    endereco: string
    numero: string
    complemento?: string
    bairro: string
    cep: string
    cidade: string
    uf: IUFs
    fone?: string
    email: string
  }
  servicos: {
    servico: {
      descricao: string
      valor: number
      codigo: string
    }
  }
  parcelas?: {
    parcela: {
      dias?: number
      data?: Date
      vlr: number
      obs?: string
      forma?: string
    }
  }[]
}

export interface IServiceInvoiceFilters {
  dataEmissao?: string
  situacao?: ISituacaoNumber
}

export type IServiceInvoiceInfos = Record<string, never>

export interface IServiceInvoiceCreateResponse {
  numero: string
}

export interface IServiceInvoiceSendResponse {
  serie: string
  numero: string
  numeronfse: string
  situacao: ISituacaoName
  cliente: {
    name: string
    cnpj: string
    email: string
  }
  dataEmissao: string
  valorNota: number
  linkNFSe: string
  codigoVerificacao: string
}

export interface IServiceInvoiceResponse {
  serie: string
  numero: string
  numeroNFSe?: string
  situacao: ISituacaoName
  contato: string
  dataEmissao: string
  valorNota: number
  linkNFSe: string
  codigoVerificacao: string
}

export default function ServiceInvoices (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'notaservico',
    pluralName: 'notasservico'
  }

  const send = async (
    numero: number | string,
    serie: number | string,
    options?: {
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<
      Record<never, string>,
      IServiceInvoiceSendResponse
    >({
      ...config,
      endpoint: `${config.singularName}/${numero}/${serie}`
    })

    const raw = options && options.raw !== undefined ? options.raw : config.raw

    // @TODO: see how to reuse the code below
    if (options) {
      if (raw) {
        return await createMethod.create({}, { raw: true })
      } else {
        return await createMethod.create({}, { raw: false })
      }
    } else {
      return await createMethod.create({})
    }
  }

  return Object.assign(config, {
    all: new All<
      IServiceInvoiceResponse,
      IServiceInvoiceFilters,
      IServiceInvoiceInfos
    >().all,
    find: new Find<IServiceInvoiceResponse, IServiceInvoiceInfos>().find,
    findBy: new FindBy<
      IServiceInvoiceResponse,
      IServiceInvoiceFilters,
      IServiceInvoiceInfos
    >().findBy,
    create: new Create<IServiceInvoice, IServiceInvoiceCreateResponse>().create,
    send
  })
}
