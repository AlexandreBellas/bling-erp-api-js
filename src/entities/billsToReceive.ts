import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface IBillToReceive {
  dataEmissao?: string
  vencimentoOriginal?: string
  competencia?: string
  nroDocumento?: string
  valor: number
  historico?: string
  categoria?: string
  idFormaPagamento?: string
  portador?: string
  vendedor?: string
  ocorrencia: {
    ocorrenciaTipo: 'U' | 'P' | 'M' | 'T' | 'S' | 'A' | 'E'
    diaVencimento?: number
    nroParcelas?: number
    diaSemanaVencimento?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
  cliente: {
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

export interface IBillToReceiveUpdateContent {
  dataLiquidacao: string
  juros?: number
  desconto?: number
  acrescimo?: number
  tarifa?: number
}

export interface IBillToReceiveFilters {
  dataEmissao?: string
  dataVencimento?: string
  situacao?: 'pago' | 'cancelada' | 'aberto' | 'parcial'
  cnpj?: string
  dataPagamento?: string
}

export type IBillToReceiveInfos = Record<string, never>

export interface IBillToReceiveCreateResponse {
  id: number
  nroDocumento: string
  vencimento: number
}

export interface IBillToReceiveResponse {
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
  idFormaPagamento?: string
  portador?: string
  linkBoleto: string
  vendedor?: string
  pagamento:
    | {
        totalPago: number
        totalJuro: number
        totalDesconto: number
        totalAcrescimo: number
        totalTarifa: number
        data: string
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
  cliente: {
    idContato: string
    nome: string
    tipoPessoa: 'F' | 'J'
    cpf?: string
    cnpj?: string
    rg?: string
    ie?: string
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

export default function BillsToReceive (api: IApiInstance) {
  const config = {
    api,
    singularName: 'contareceber',
    pluralName: 'contasreceber'
  }

  return Object.assign(config, {
    all: new All<IBillToReceiveResponse, IBillToReceiveFilters>().all,
    find: new Find<IBillToReceiveResponse, IBillToReceiveInfos>().find,
    findBy: new FindBy<IBillToReceiveResponse, IBillToReceiveFilters>().findBy,
    create: new Create<IBillToReceive, IBillToReceiveCreateResponse>().create,
    update: new Update<IBillToReceiveUpdateContent, IBillToReceiveResponse>()
      .update
  })
}
