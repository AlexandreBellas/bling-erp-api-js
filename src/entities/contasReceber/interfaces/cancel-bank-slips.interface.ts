interface ContasReceberBankSlipsCancelUnicoDTO {
  type2FA: number
  code2FA: string
  /**
   * caso for cancelar uma conta sem idOrigem enviar o valor `0`
   */
  idOrigem: number
  idDuplicata: number
  reason: string
}

interface ContasReceberBankSlipsCancelTodosDTO {
  type2FA: number
  code2FA: string
  idOrigem: number
  reason: string
}

interface ContasReceberBankSlipsCancelUnicoSem2FADTO {
  /**
   * caso for cancelar uma conta sem idOrigem enviar o valor `0`
   */
  idOrigem: number
  idDuplicata: number
  reason: string
}

interface ContasReceberBankSlipsCancelTodosSem2FADTO {
  idOrigem: number
  reason: string
}

export type ICancelBankSlipsBody =
  | ContasReceberBankSlipsCancelUnicoDTO
  | ContasReceberBankSlipsCancelTodosDTO
  | ContasReceberBankSlipsCancelUnicoSem2FADTO
  | ContasReceberBankSlipsCancelTodosSem2FADTO
