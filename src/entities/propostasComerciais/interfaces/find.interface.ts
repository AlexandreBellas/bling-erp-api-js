import { IFreteModalidade } from "../types/frete-modalidade.type"

export interface IFindParams {
  /**
   * ID da proposta comercial
   */
  idPropostaComercial: number
}

export interface IFindResponse {
  id?: number
  data?: string
  situacao?: string
  total?: number
  totalProdutos?: number
  numero?: number
  contato?: {
    id?: number
  }
  loja?: {
    id?: number
  }
  desconto?: number
  outrasDespesas?: number
  garantia?: number
  dataProximoContato?: string
  observacoes?: string
  observacaoInterna?: string
  totalOutrosItens?: number
  aosCuidadosDe?: string
  introducao?: string
  prazoEntrega?: string
  itens: {
    produto?: {
      id?: number
      descricao?: string
    }
    codigo?: string
    unidade?: string
    quantidade?: number
    desconto?: number
    valor?: number
    descricaoDetalhada?: string
  }[]
  parcelas: {
    numeroDias?: number
    dataVencimento?: string
    valor?: number
    observacoes?: string
    formaPagamento?: {
      id?: number
    }[]
  }[]
  vendedor?: {
    id?: number
  }
  transporte?: {
    freteModalidade?: IFreteModalidade
    frete?: number
    quantidadeVolumes?: number
    prazoEntrega?: number
    pesoBruto?: number
    contato?: {
      id?: number
      nome?: string
    }
    volumes?: {
      id: number
      servico?: string
      codigoRastreamento?: string
    }
  }
}
