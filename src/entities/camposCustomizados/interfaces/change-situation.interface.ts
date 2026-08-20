import ISituacao from '../../@shared/types/situacao.type'

export interface IChangeSituationParams {
  idCampoCustomizado: number
}

export interface IChangeSituationBody {
  situacao: ISituacao
}
