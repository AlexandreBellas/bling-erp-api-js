import ITipoPessoa from 'src/entities/@shared/types/tipoPessoa.type'
import IUF from 'src/entities/@shared/types/uf.type'
import { IIndicadorIE } from '../types/indicador-ie.type'
import { ISexo } from '../types/sexo.type'
import { ISituacao } from '../types/situacao.type'

export interface IUpdateParams {
  /**
   * ID do contato
   */
  idContato: number
}

export interface IUpdateBody {
  nome: string
  codigo: string
  situacao: ISituacao
  numeroDocumento: string
  telefone: string
  celular: string
  fantasia: string
  tipo: ITipoPessoa
  indicadorIe: IIndicadorIE
  ie: string
  rg: string
  orgaoEmissor: string
  email: string
  endereco: {
    geral: {
      endereco: string
      cep: string
      bairro: string
      municipio: string
      uf: IUF
      numero: string
      complemento: string
    }
    cobranca: {
      endereco: string
      cep: string
      bairro: string
      municipio: string
      uf: IUF
      numero: string
      complemento: string
    }
  }
  vendedor: { id: number }
  dadosAdicionais: {
    dataNascimento: string
    sexo: ISexo
    naturalidade: string
  }
  financeiro: {
    limiteCredito: number
    condicaoPagamento: string
    categoria: { id: number }
  }
  pais: { nome: string }
  tiposContato: {
    id: number
    descricao: string
  }[]
  pessoasContato: {
    id: number
    descricao: string
  }[]
}
