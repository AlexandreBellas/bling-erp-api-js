import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationParams {
  /**
   * ID da proposta comercial
   */
  idPropostaComercial: number
}

export interface IChangeSituationBody {
  situacao: ISituacao
}
