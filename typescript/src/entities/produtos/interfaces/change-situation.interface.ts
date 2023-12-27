import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationParams {
  /**
   * ID do produto
   */
  idProduto: number
}

export interface IChangeSituationBody {
  situacao: ISituacao
}
