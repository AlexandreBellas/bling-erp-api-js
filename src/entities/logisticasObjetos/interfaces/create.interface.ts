import { ISituacao } from '../types/situacao.type'

export interface ICreateBody {
  pedidoVenda: { id: number }
  notaFiscal: { id: number }
  servico: { id: number }
  rastreamento: {
    codigo: string
    descricao: string
    situacao: ISituacao
    origem: string
    destino: string
    ultimaAlteracao: string
    url: string
  }
  dimensoes?: {
    peso: number
    altura: number
    largura: number
    comprimento: number
    diametro: number
  }
  embalagem: { id: number }
  dataSaida: string
  prazoEntregaPrevisto: number
  fretePrevisto: number
  valorDeclarado: number
  avisoRecebimento: boolean
  maoPropria: boolean
}

export interface ICreateResponse {
  data: { id: number }
}
