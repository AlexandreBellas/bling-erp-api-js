import { ILancamentoEstoque } from '../types/lancamento-estoque.type'
import { ITipoEstoque } from '../types/tipo-estoque.type'

export interface IFindParams {
  /**
   * ID do produto com composição
   */
  idProdutoEstrutura: number
}

export interface IFindResponse {
  data: {
    tipoEstoque: ITipoEstoque
    lancamentoEstoque: ILancamentoEstoque
    componentes: {
      produto: { id: number }
      quantidade: number
    }[]
  }
}
