import { ISituacao } from '../types/situacao.type'

export interface IAnunciosGetAllResponseDTO {
  /**
   * ID do anúncio.
   */
  id?: number
  /**
   * Título do anúncio.
   */
  titulo?: string
  /**
   * Situação do anúncio.
   */
  situacao?: number
  anuncioLoja?: {
    /**
     * Código do anúncio na loja externa.
     */
    id?: string
  }
  /**
   * Preço publicado no anúncio.
   */
  preco?: number
}

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
   * Situação do anúncio `1` Publicado `2` Rascunho `3` Com problema `4` Pausado
   */
  situacao?: ISituacao
  /**
   * ID do produto
   */
  idProduto?: number
  /**
   * Tipo de integração
   */
  tipoIntegracao: string
  /**
   * ID da loja
   */
  idLoja: number
}

export interface IGetResponse {
  data?: IAnunciosGetAllResponseDTO
}
