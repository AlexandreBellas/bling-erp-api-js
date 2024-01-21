export interface IAddComponentParams {
  /**
   * ID do produto com composição
   */
  idProdutoEstrutura: number
}

export interface IAddComponentBody {
  produto: { id: number }
  quantidade: number
}

export interface IAddComponentParameter {
  params: IAddComponentParams
  body: IAddComponentBody[]
}
