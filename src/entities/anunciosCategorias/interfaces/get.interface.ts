export interface IAnunciosCategoriaDTO {
  /**
   * ID da categoria.
   */
  id?: number
  /**
   * Nome da categoria.
   */
  nome?: string
}

export interface IGetParams {
  /**
   * Tipo de integração
   */
  tipoIntegracao: string
  /**
   * ID da loja
   */
  idLoja: number
  /**
   * ID da categoria
   */
  idCategoria?: number
  /**
   * Tipo do produto
   */
  tipoProduto?: string
}

export interface IGetResponse {
  data?: IAnunciosCategoriaDTO[]
}
