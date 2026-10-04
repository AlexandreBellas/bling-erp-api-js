export interface IAnunciosAtributoDTO {
  /**
   * ID do atributo.
   */
  id?: number
  /**
   * ID externo do atributo.
   */
  id_externo?: string
  /**
   * Nome do atributo.
   */
  nome?: string
  /**
   * Tipo do atributo.
   */
  tipo?: string
  /**
   * Valor do atributo.
   */
  valor?: string
  /**
   * Unidade do atributo, se aplicável.
   */
  unidade?: string
}

export interface IAnunciosImagemDTO {
  /**
   * ID da imagem.
   */
  id?: number
  /**
   * URL da imagem.
   */
  url?: string
  /**
   * Ordem da imagem.
   */
  ordem?: number
  /**
   * Tipo da imagem.
   */
  tipo?: string
}

export interface IAnunciosVariacaoDTO {
  /**
   * ID da variação.
   */
  id?: number
  /**
   * Nome da variação.
   */
  nome?: string
}

export interface IAnunciosGetByIdResponseDTO {
  /**
   * ID do anúncio.
   */
  id?: number
  anuncioLoja?: {
    /**
     * Código do anúncio na loja externa.
     */
    id?: string
  }
  preco?: {
    /**
     * Preço publicado no anúncio.
     */
    valor?: number
    /**
     * Preço promocional do anúncio.
     */
    promocional?: number
  }
  produto?: {
    /**
     * ID do produto.
     */
    id?: number
  }
  /**
   * Título do anúncio.
   */
  titulo?: string
  /**
   * Descrição do anúncio.
   */
  descricao?: string
  /**
   * Situação do anúncio.
   */
  status?: number
  atributos?: IAnunciosAtributoDTO[]
  imagens?: IAnunciosImagemDTO[]
  variacoes?: IAnunciosVariacaoDTO[]
}

export interface IFindParams {
  /**
   * ID do anúncio
   */
  idAnuncio: number
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
  data?: IAnunciosGetByIdResponseDTO
}
