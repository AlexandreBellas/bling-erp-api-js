import BlingEntity from '../core/entity'
import { AxiosInstance as IAxiosInstance } from 'axios'

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
    id?: string
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
    itens: {
      item: {
        codigo?: string
        descricao: string
        un?: string
        qtde: number
        valorUnidade: number
      }
    }[]
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
      }
    }[]
  }
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

export interface ICommercialProposalInfos {}

export interface ICommercialProposalError {}

export default class CommercialProposals extends BlingEntity<
  ICommercialProposal,
  ICommercialProposalFilters,
  ICommercialProposalInfos,
  ICommercialProposalError
> {
  constructor (api: IAxiosInstance) {
    super(api)

    this.singularName = 'propostacomercial'
    this.pluralName = 'propostascomerciais'
  }
}
