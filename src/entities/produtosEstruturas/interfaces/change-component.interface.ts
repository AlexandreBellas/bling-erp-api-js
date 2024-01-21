export interface IChangeComponentParams {
  /**
   * ID do produto com composição
   */
  idProdutoEstrutura: number
  /**
   * ID do componente
   */
  idComponente: number
}

export interface IChangeComponentBody {
  produto: { id: number }
  quantidade: number
}
