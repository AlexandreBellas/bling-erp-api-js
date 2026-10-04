import ISituacao from '../../@shared/types/situacao.type'

export interface IChangeSituationParams {
  /**
   * ID da forma de pagamento
   */
  idFormaPagamento: number
}

export interface IChangeSituationBody {
  /**
   * Situação que será alterada. `1` Ativa, `0` Inativa.
   */
  situacao: ISituacao
}
