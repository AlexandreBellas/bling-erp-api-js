import IFiltroSaldoEstoque from '../../@shared/types/filtro-saldo-estoque.type'
import { ICriterio } from '../types/criterio.type'
import { IFormato } from '../types/formato.type'
import { ISituacao } from '../types/situacao.type'
import { ITipoFiltro } from '../types/tipo-filtro.type'
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
   * Critério de listagem
   */
  criterio?: ICriterio
  /**
   *
   */
  tipo?: ITipoFiltro
  /**
   * ID do componente. Utilizado quando o filtro tipo for `E`.
   */
  idComponente?: number
  /**
   * Data de inclusão inicial
   */
  dataInclusaoInicial?: Date | string
  /**
   * Data de inclusão final
   */
  dataInclusaoFinal?: Date | string
  /**
   * Data de alteração inicial
   */
  dataAlteracaoInicial?: Date | string
  /**
   * Data de alteração final
   */
  dataAlteracaoFinal?: Date | string
  /**
   * ID da categoria do produto
   */
  idCategoria?: number
  /**
   * ID da loja
   */
  idLoja?: number
  /**
   * Nome do produto
   */
  nome?: string
  /**
   * IDs dos produtos
   */
  idsProdutos?: number[]
  /**
   * Códigos (SKU) dos produtos
   */
  codigos?: string[]
  /**
   * GTINs dos produtos
   */
  gtins?: string[]
  /**
   * Filtra o saldo em estoque. `0` zerado, `1` positivo, `2` negativo.
   */
  filtroSaldoEstoque?: IFiltroSaldoEstoque
  /**
   * Depósito considerado no filtro de saldo
   */
  filtroSaldoEstoqueDeposito?: number
}

export interface IGetResponse {
  data: {
    id?: number
    idProdutoPai?: number
    nome: string
    codigo?: string
    preco?: number
    precoCusto?: number
    estoque?: {
      saldoVirtualTotal?: number
    }
    tipo: ITipo
    situacao: ISituacao
    formato: IFormato
    descricaoCurta?: string
    imagemURL?: string
  }[]
}
