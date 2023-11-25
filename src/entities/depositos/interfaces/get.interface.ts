import ISituacao from 'src/entities/@shared/types/situacao.type'

export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
  /**
   * Descrição do depósito
   */
  descricao?: string
  /**
   *
   */
  situacao?: ISituacao
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    situacao: ISituacao
    padrao: boolean
    desconsiderarSaldo: boolean
  }[]
}
