import ISituacao from 'src/entities/@shared/types/situacao.type'

export interface IChangeSituationParams {
  idCampoCustomizado: number
}

export interface IChangeSituationBody {
  situacao: ISituacao
}
