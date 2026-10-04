export interface IAnunciosGetAttributesFromCategoryResponseDTO {
  /**
   * ID do atributo.
   */
  id?: number
  /**
   * Nome do atributo.
   */
  nome?: string
  /**
   * Se o atributo é obrigatório.
   */
  obrigatorio?: boolean
  /**
   * Tipo do atributo.
   */
  tipo?: string
  /**
   * Unidade padrão do atributo.
   */
  unidadePadrao?: string
  /**
   * Mínimo do atributo.
   */
  minimo?: number
  /**
   * Máximo do atributo.
   */
  maximo?: number
}

export interface IFindParams {
  /**
   * ID da categoria no marketplace (ex.: Mercado Livre)
   */
  idCategoria: string
  /**
   * Tipo de integração
   */
  tipoIntegracao: string
  /**
   * ID da loja
   */
  idLoja: number
}

export interface IFindResponse {
  data?: IAnunciosGetAttributesFromCategoryResponseDTO
}
