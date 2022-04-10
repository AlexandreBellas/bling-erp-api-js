import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface IBillToPay {
  dataEmissao?: string
  vencimentoOriginal?: string
  competencia?: string
  nroDocumento?: string
  valor: number
  historico?: string
  categoria?: string
  portador?: string
  idFormaPagamento?: string
  ocorrencia: {
    ocorrenciaTipo: 'U' | 'P' | 'M' | 'T' | 'S' | 'A' | 'E'
    diaVencimento?: number
    nroParcelas?: number
    diaSemanaVencimento?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
  fornecedor: {
    nome?: string
    id?: string
    cpf_cnpj?: string
    tipoPessoa?: 'F' | 'J'
    ie_rg?: string
    endereco?: string
    numero?: string
    complemento?: string
    cidade?: string
    bairro?: string
    cep?: string
    uf?: string
    email?: string
    fone?: string
    celular?: string
  }
}

export interface IBillToPayUpdateContent {
  dataLiquidacao: string
  juros?: number
  desconto?: number
  acrescimo?: number
  tarifa?: number
}

export interface IBillToPayFilters {
  dataEmissao?: string
  dataVencimento?: string
  situacao?: 'pago' | 'cancelada' | 'aberto' | 'parcial'
  cnpj?: string
}

export type IBillToPayInfos = Record<string, never>

export interface IBillToPayCreateResponse {
  id: number
  nroDocumento: string
  vencimento: number
}

export interface IBillToPayResponse {
  id: string
  situacao: 'pago' | 'cancelada' | 'aberto' | 'parcial'
  dataEmissao: string
  vencimentoOriginal: string
  vencimento: string
  competencia: string
  nroDocumento?: string
  valor: string
  saldo: string
  historico?: string
  categoria?: string
  portador?: string
  pagamento:
    | {
        totalPago: number
        totalJuro: number
        totalDesconto: number
        totalAcrescimo: number
        totalTarifa: number
        data: string
        borderos: {
          bordero: {
            id: string
            conta: string
            dataPagamento: string
            valorPago: string
            valorJuro: string
            valorDesconto: string
            valorAcrescimo: string
            valorTarifa: string
          }
        }[]
      }
    | []
  ocorrencia:
    | 'Única'
    | 'Parcela'
    | 'Mensal'
    | 'Trimestral'
    | 'Semestral'
    | 'Anual'
    | 'Semanal'
  fornecedor: {
    idContato: string
    nome: string
    tipoPessoa: 'F' | 'J'
    cpf?: string
    cnpj?: string
    rg?: string
    endereco?: string
    numero?: string
    complemento?: string
    cidade?: string
    bairro?: string
    cep?: string
    uf?: string
    email?: string
  }
}

export default function BillsToPay (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'contapagar',
    pluralName: 'contaspagar'
  }

  return Object.assign(config, {
    all: new All<IBillToPayResponse, IBillToPayFilters, IBillToPayInfos>().all,
    find: new Find<IBillToPayResponse, IBillToPayInfos>().find,
    findBy: new FindBy<IBillToPayResponse, IBillToPayFilters, IBillToPayInfos>()
      .findBy,
    create: new Create<IBillToPay, IBillToPayCreateResponse>().create,
    update: new Update<IBillToPayUpdateContent, IBillToPayResponse>().update
  })
}
