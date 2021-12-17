import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

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

export interface IContactResponse {
  id: string
  codigo?: string
  nome: string
  fantasia?: string
  tipo: 'F' | 'J' | 'E'
  cpf: string
  cnpj: string
  ie_rg?: string
  endereco?: string
  numero?: string
  bairro?: string
  cep?: string
  cidade?: string
  complemento?: string
  uf?: string
  fone?: string
  email?: string
  situacao: string
  contribuinte: '1' | '2' | '9'
  site?: string
  celular?: string
  dataAlteracao: string
  dataInclusao: string
  sexo?: string
  clienteDesde: string
  limiteCredito: string
  dataNascimento?: string
  informacoesContato?: string
}

export interface IContactCreateResponse {
  id: number
  nome: string
  cpf_cnpj: string
}

export interface IContactUpdateResponse {
  id: string
  nome: string
  cpf_cnpj: string
}

export default function Contacts (api: IApiInstance) {
  const config = {
    api,
    singularName: 'contato',
    pluralName: 'contatos'
  }

  return Object.assign(config, {
    all: new All<IContactResponse, IContactFilters>().all,
    find: new Find<IContactResponse, IContactInfos>().find,
    findBy: new FindBy<IContactResponse, IContactFilters>().findBy,
    create: new Create<IContact, IContactCreateResponse>().create,
    update: new Update<IContact, IContactUpdateResponse>().update
  })
}
