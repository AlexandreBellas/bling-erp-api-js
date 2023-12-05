import { ICriterio } from '../types/criterio.type'
import { ITipo } from '../types/tipo.type'

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
   * Criterio de listagem
   */
  criterio?: ICriterio
  /**
   * Tipo de listagem
   */
  tipo?: ITipo
  /**
   * ID do componente. Utilizado quando o filtro tipo for `E`.
   */
  idComponente?: number
  /**
   * data de inclusao inicial
   */
  dataInclusaoInicial?: string
  /**
   * data de inclusao final
   */
  dataInclusaoFinal?: string
  /**
   * data de alteracao inicial
   */
  dataAlteracaoInicial?: string
  /**
   * data de alteracao o inal
   */
  dataAlteracaoFinal?: string
  /**
   * ID da categoria do produto
   */
  idCategoria?: number
  /**
   * ID da loja
   */
  idLoja?: number
  /**
   * Código do produto
   */
  codigo?: string
  /**
   * Nome do produto
   */
  nome?: string
  /**
   * IDs dos produtos
   */
  idsProdutos?: number[]
}

export interface IGetResponse {
  data: {
    id: number,
    nome: string,
    codigo: string,
    preco: number,
    tipo: string,
    situacao: string,
    formato: string,
    descricaoCurta: string
  }[]
}
