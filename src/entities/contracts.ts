import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'
import Delete from '../core/functions/delete'

type IContractSituacao = 'A' | 'I' | 'B' | 'S' | 'T'

export interface IContract {
  dataCriacao?: string
  dataBase?: string
  contatoDiferenteCobranca?: number
  numeroContrato?: string
  descricao?: string
  situacao: IContractSituacao
  valor: number
  emiteNota: 'S' | 'N'
  periodicidadeCobranca?: string
  opcoesNota?: {
    percentualISS?: number
    descISSTotalNota: 'S' | 'N'
    descIRTotalNota?: 'S' | 'N'
    codListaServico?: string
    idProdutoVinculado?: string
    mesNota?: string
    textoNota?: string
    naturezaOperacao?: string
    cfop?: string
  }
  idCategoria?: number
  idPortador?: number
  idVendedor?: number
  desconto?: number
  mesFimDesconto?: string
  anoFimDesconto?: string
  mesTermino?: string
  anoTermino?: string
  mesVencimento?: string
  nroParcelasVendedor?: number
  percentualVendedor?: number
  emiteOS?: 'S' | 'N'
  obs?: string
  cliente: {
    nome?: string
    cnpj_cpf: string
    tipo: 'F' | 'J'
    ie_rg?: string
    rg?: string
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
  contato?: {
    nome?: string
    cnpj_cpf: string
    tipoPessoa?: 'F' | 'J'
    ie_rg?: string
    rg?: string
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
  anexos: {
    anexo: {
      filename: string
      data: string
    }[]
  }
  diaVencimento?: string
}

export interface IContractFilters {
  dataCriacao?: string
  dataBase?: string
  situacao?: IContractSituacao
  idContato?: number
  idCliente?: number
}

export type IContractInfos = Record<string, never>

export interface IContractCreateResponse {
  id: string
  numeroContrato: string
}

export interface IContractDeleteResponse {
  id: string
  mensagem: string
}

export interface IContractResponse {
  id: string
  nome: string
  descricao: string
  contatoDiferenteCobranca: string
  numeroContrato: string
  idCliente: string
  idContato: string
  situacao: IContractSituacao
  dataCriacao: string
  valor: string
  dataBase: string
  mesVencimento: string
  diaVencimento: string
  periodicidadeCobranca: string
  emiteNota: 'S' | 'N'
  tipoManutencao: string
  idCategoria: string
  idPortador: string
  idFormaPagamento?: string
  desconto: string
  mesFimDesconto: string
  anoFimDesconto: string
  mesTermino: string
  anoTermino: string
  idVendedor: string
  nroParcelasVendedor: string
  percentualVendedor: string
  emiteOS: 'S' | 'N'
  obs: string
  dataUltimoPagamento?: string
  opcoesNota: {
    percentualISS: string
    descontarISS?: string
    descISSTotalNota: 'S' | 'N'
    descIRTotalNota: 'S' | 'N'
    codListaServico: string
    idProdutoVinculado: string
    mesNota: string
    textoNota: string
    naturezaOperacao: string
    cfop?: string
  }
  nroContasEmAtraso: string
  anexos: {
    nome: string
    link: string
  }[]
}

export default function Contracts (api: IApiInstance) {
  const config = {
    api,
    singularName: 'contrato',
    pluralName: 'contratos'
  }

  return Object.assign(config, {
    all: new All<IContractResponse, IContractFilters>().all,
    find: new Find<IContractResponse, IContractInfos>().find,
    findBy: new FindBy<IContractResponse, IContractFilters>().findBy,
    create: new Create<IContract, IContractCreateResponse>().create,
    update: new Update<IContract, IContractResponse>().update,
    delete: new Delete<IContractDeleteResponse>().delete
  })
}
