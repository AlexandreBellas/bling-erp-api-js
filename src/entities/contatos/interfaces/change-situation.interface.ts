import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationParams {
  /**
   * ID do contato
   */
  idContato: number
}

export interface IChangeSituationBody {
  situacao: ISituacao
}
