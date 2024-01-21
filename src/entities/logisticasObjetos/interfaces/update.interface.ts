import { ISituacao } from '../types/situacao.type'

export interface IUpdateParams {
  /**
   * ID do objeto logístico
   */
  idObjeto: number
}

export interface IUpdateBody {
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

export interface IUpdateResponse {
  data: { id: number }
}
