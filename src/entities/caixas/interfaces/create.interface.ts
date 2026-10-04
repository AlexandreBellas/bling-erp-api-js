import { IDebCred } from '../types/deb-cred.type'

export interface IContasFinanceirasDadosBasicosDTOWrite {
  id?: number
}

export interface ICaixasBancosDadosBasicosCategoriaDTOWrite {
  id?: number
}

export interface ICaixasBancosDadosBasicosOrigemDTOWrite {
  id?: number
}

export interface ICaixasBancosDadosBasicoContatoDTOWrite {
  id?: number
}

export interface ICreateBody {
  /**
   * ID do lançamento (deve corresponder ao ID da URL)
   */
  id?: number
  /**
   * Data do lançamento
   */
  data: string
  /**
   * Valor do lançamento
   */
  valor: number
  /**
   * Tipo de lançamento: `C` - Crédito `D` - Débito
   */
  debCred: IDebCred
  /**
   * Data de competência
   */
  competencia: string
  /**
   * Observações do lançamento
   */
  observacoes: string
  contaFinanceira?: IContasFinanceirasDadosBasicosDTOWrite
  categoria?: ICaixasBancosDadosBasicosCategoriaDTOWrite
  origem?: ICaixasBancosDadosBasicosOrigemDTOWrite
  contato?: ICaixasBancosDadosBasicoContatoDTOWrite
}

export interface ICreateResponse {
  /**
   * ID do lançamento criado
   */
  id?: number
}
