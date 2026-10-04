import IUF from '../../@shared/types/uf.type'
import { IIndicadorUsoConsumoPessoal } from '../types/indicador-uso-consumo-pessoal.type'

export interface ICreateBody {
  numero?: string
  numeroRPS: string
  serie: string
  dataEmissao?: string
  contato?: {
    id: number
    nome: string
    numeroDocumento: string
    email: string
    ie?: string
    /**
     * Inscrição municipal.
     */
    im?: string
    telefone?: string
    endereco?: {
      endereco?: string
      numero?: string
      complemento?: string
      bairro: string
      cep?: string
      municipio: string
      uf?: IUF
    }
  }
  link?: string
  codigoVerificacao?: string
  data?: string
  reterISS?: boolean
  baseCalculo?: number
  desconto?: number
  vendedor?: { id: number }
  servicos?: {
    codigo: string
    descricao: string
    valor: number
  }[]

  parcelas?: {
    data: string
    valor: number
    observacoes?: string
    formaPagamento?: { id: number }
  }[]
  tributacaoIbsCbs?: {
    indicadorOperacao: string
    tipoOperacao: string
    tipoEnteGovernamental?: string
    indicadorUsoConsumoPessoal?: IIndicadorUsoConsumoPessoal
    tributacao: {
      codigoSituacaoTributaria: string
      classificacaoTributaria: string
      codigoCreditoPresumido?: string
      cstRegimeRegular?: string
      classificacaoTributariaRegular?: string
      percentualDiferimentoEstadual?: number
      percentualDiferimentoMunicipal?: number
      percentualDiferimentoCBS?: number
    }
  }
}

export interface ICreateResponse {
  data: {
    id: number
    numeroRPS: string
    serie: string
  }
}
