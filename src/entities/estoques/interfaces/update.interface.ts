import { IOperacao } from '../types/operacao.type'

export interface IUpdateParams {
  /**
   * ID do estoque
   */
  idEstoque: number
}

export interface IUpdateBody {
  preco?: number
  /**
   * Preço unitário de custo.
   */
  precoCusto?: number
  observacoes?: string
  /**
   * @deprecated Não consta na documentação oficial do endpoint.
   */
  operacao?: IOperacao
  /**
   * @deprecated Não consta na documentação oficial do endpoint. Use `precoCusto`.
   */
  custo?: number
  /**
   * @deprecated Não consta na documentação oficial do endpoint.
   */
  quantidade?: number
  /**
   * @deprecated Não consta na documentação oficial do endpoint.
   */
  data?: string
}
