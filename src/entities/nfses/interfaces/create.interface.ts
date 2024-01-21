import IUF from 'src/entities/@shared/types/uf.type'

export interface ICreateBody {
  numero?: string
  numeroRPS: string
  serie: string
  dataEmissao?: string
  contato: {
    id: number
    nome: string
    numeroDocumento: string
    email: string
    ie?: string
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
  desconto?: number
  vendedor?: { id: number }
  servicos: {
    codigo: string
    descricao: string
    valor: number
  }[]

  parcelas: {
    data: string
    valor: number
    observacoes?: string
    formaPagamento?: { id: number }
  }[]
}

export interface ICreateResponse {
  data: {
    id: number
    numeroRPS: string
    serie: string
  }
}
