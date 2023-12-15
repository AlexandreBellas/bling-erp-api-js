import { ISituacaoRastreamento } from '../types/situacao-rastreamento.type'
import { ISituacao } from '../types/situacao.type'

export interface IFindParams {
  /**
   * ID da remessa de postagem
   */
  idRemessa: number
}

export interface IFindResponse {
  data: {
    id: number
    numeroPlp: string
    situacao: ISituacao
    descricao: string
    dataCriacao: string
    logistica: { id: number }
    objetos: {
      id: number
      remessa?: { id: number }
      pedidoVenda: { id: number }
      notaFiscal: { id: number }
      servico: {
        id: number
        nome: string
        codigo: string
      }
      rastreamento: {
        codigo: string
        descricao: string
        situacao: ISituacaoRastreamento
        origem: string
        destino: string
        ultimaAlteracao: string
        url: string
      }
      dimensao: {
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
    }[]
  }
}
