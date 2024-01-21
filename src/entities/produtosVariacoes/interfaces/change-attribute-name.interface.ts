export interface IChangeAttributeNameParams {
  /**
   * ID do produto pai
   */
  idProdutoPai: number
}

export interface IChangeAttributeNameBody {
  atributoAntigo: string
  atributoNovo: string
}

export interface IChangeAttributeNameResponse {
  data: { id: number }[]
}
