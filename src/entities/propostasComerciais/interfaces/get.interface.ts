
export interface IGetParams {
  /**
   * O valor referente a situação da proposta: Pendente, Aguardando, Não aprovado, Aprovado, Concluido, Rascunho. Para mais situações, pesquisar pelo número separado por vírgula.
   */
  situacao?: string
  /**
   * ID do contato
   */
  idContato?: string
  /**
   * Data inicial
   */
  dataInicial?: Date | string
  /**
   * Data final
   */
  dataFinal?: Date | string
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
}

export interface IGetResponse {
  data: {
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
  }[]

}
