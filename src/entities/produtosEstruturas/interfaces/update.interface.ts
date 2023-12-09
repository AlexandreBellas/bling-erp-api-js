import { ILancamentoEstoque } from '../types/lancamento-estoque.type'
import { ITipoEstoque } from '../types/tipo-estoque.type'

export interface IUpdateParams {
  /**
   * ID do produto com composição
   */
  idProdutoEstrutura: number
}

export interface IUpdateBody {
  tipoEstoque: ITipoEstoque
  lancamentoEstoque: ILancamentoEstoque
  componentes: {
    produto: { id: number }
    quantidade: number
  }[]
}
