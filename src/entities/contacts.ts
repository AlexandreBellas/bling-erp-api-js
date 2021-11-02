import BlingEntity from '../core/entity'
import { AxiosInstance as IAxiosInstance } from 'axios'

export interface IContact {
  nome: string
  fantasia?: string
  tipoPessoa: 'F' | 'J' | 'E'
  contribuinte: '1' | '2' | '9'
  cpf_cnpj: string
  ie_rg?: string
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
  emailNfe?: string
  informacaoContato?: string
  limiteCredito?: number
  paisOrigem?: string
  codigo?: string
  site?: string
  obs?: string
  tipos_contatos?: {
    tipo_contato: {
      descricao?: string
    }
  }[]
}

export interface IContactFilters {
  dataInclusao?: string
  dataAlteracao?: string
  tipoPessoa?: 'F' | 'J' | 'E'
}

export interface IContactInfos {
  identificador?: '1' | '2'
}

export interface IContactResponse extends IContact {
  id: string
  tipo: string
  cpf: string
  cnpj: string
  situacao: string
  dataAlteracao: string
  dataInclusao: string
  sexo: string
  clienteDesde: string
  dataNascimento: string
}

export default class Contacts extends BlingEntity<
  IContact,
  IContactFilters,
  IContactInfos,
  IContactResponse
> {
  constructor (api: IAxiosInstance, apiKey: string) {
    super(api, apiKey)

    this.singularName = 'contato'
    this.pluralName = 'contatos'
  }
}
