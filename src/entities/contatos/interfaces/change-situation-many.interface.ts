import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationManyBody {
  idsContatos: number[]
  situacao: ISituacao
}
