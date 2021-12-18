import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface ICommercialProposal {
  data?: string
  dataProximoContato?: string
  contatoAc?: string
  loja?: number
  numero?: number
  vendedor?: string
  desconto?: string
  outrasDespesas?: number
  validade?: number
  prazoEntrega?: string
  garantia?: number
  observacao?: string
  obsInterna?: string
  assinaturaSaudacao?: string
  assinaturaResponsavel?: string
  cliente: {
    id?: number | string
    nome: string
    tipoPessoa?: 'F' | 'J' | 'E'
    cpfCnpj?: string
    ie?: string
    rg?: string
    contribuinte?: '1' | '2' | '3'
    endereco?: string
    numero?: string
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
      descricao?: string
      un?: string
      qtde: number
      valorUnidade: number | string
    }[]
  }
  transporte?: {
    transportadora?: string
    tipoFrete?: 'R' | 'D' | 'T' | '3' | '4' | '5'
    frete?: number
  }
  parcelas?: {
    parcela: {
      nrDias: number
      valor: number
      obs?: string
      formaPagamento: {
        id: number
      }
    }[]
  }
}

export interface ICommercialProposalUpdateContent {
  situacao:
    | 'Descrição'
    | 'Pendente'
    | 'Aguardando'
    | 'Não aprovado'
    | 'Aprovado'
    | 'Concluído'
    | 'Rascunho'
}

export interface ICommercialProposalFilters {
  data?: string
  situacao?:
    | 'Descrição'
    | 'Pendente'
    | 'Aguardando'
    | 'Não aprovado'
    | 'Aprovado'
    | 'Concluído'
    | 'Rascunho'
  idContato?: number
}

export type ICommercialProposalInfos = Record<string, never>

export interface ICommercialProposalCreateResponse {
  id: number
  numero: number
}

export interface ICommercialProposalUpdateResponse {
  numero: number
  mensagem: number
}

export interface ICommercialProposalResponse {
  desconto: string
  obsInterna?: string
  data: string
  dataProximoContato: string
  numeroProposta: string
  vendedor?: string
  valorFrete: string
  subtotal: string
  totalOrcamento: string
  situacao:
    | 'Descrição'
    | 'Pendente'
    | 'Aguardando'
    | 'Não aprovado'
    | 'Aprovado'
    | 'Concluído'
    | 'Rascunho'
  loja: string
  aosCuidadosDe?: string
  garantia: string
  validadeDaProposta: string
  observacao?: string
  prazoEntrega?: string
  assinaturaSaudacao?: string
  assinaturaResponsavel?: string
  cliente: {
    idContato: string
    nome: string
    cpfCnpj?: string
    ie: string | 'ISENTO'
    rg?: string
    endereco?: string
    numero?: string
    complemento?: string
    cidade?: string
    cep?: string
    uf?: string
    email?: string
    celular?: string
    fone?: string
  }
  itens: {
    item: {
      codigo: string
      descricao: string
      quantidade: string
      valorUnidade: string
      precoLista: string
      descontoItem: string
      un: string
    }
  }[]
  transporte: {
    transportadora?: string
    tipoFrete?: string
    qtdVolumes?: string
    pesoBruto?: string
  }
}

export default function CommercialProposals (api: IApiInstance) {
  const config = {
    api,
    singularName: 'propostacomercial',
    pluralName: 'propostascomerciais'
  }

  return Object.assign(config, {
    all: new All<ICommercialProposalResponse, ICommercialProposalFilters>().all,
    find: new Find<ICommercialProposalResponse, ICommercialProposalInfos>()
      .find,
    findBy: new FindBy<
      ICommercialProposalResponse,
      ICommercialProposalFilters
    >().findBy,
    create: new Create<ICommercialProposal, ICommercialProposalCreateResponse>()
      .create,
    update: new Update<ICommercialProposal, ICommercialProposalUpdateResponse>()
      .update
  })
}
