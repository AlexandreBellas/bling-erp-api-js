import ISituacao from 'src/entities/@shared/types/situacao.type'

export interface IFindParams {
  /**
   * ID do depósito
   */
  idDeposito: number
}

export interface IFindResponse {
  data: {
    id: number
    descricao: string
    situacao: ISituacao
    padrao: boolean
    desconsiderarSaldo: boolean
  }
}
