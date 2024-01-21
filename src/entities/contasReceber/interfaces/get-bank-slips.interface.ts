import { ISituacaoString } from '../types/situacao.type'

export interface IGetBankSlipsParams {
  idOrigem: number
  situations?: ISituacaoString[]
}

export interface IGetBankSlipsResponse {
  numberSale: string
  numberNF: string
  amountAccounts: number
  amountValuesAccounts: number
  haveAccountWithIntegration: true
  accounts: {
    id: number
    idExternal: string
    dueDate: string
    value: number
    situation: ISituacaoString
    iconSituation: string
    descriptionSituation: string
  }[]
}
