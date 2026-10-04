import { IDebCred } from '../types/deb-cred.type'
import { ISaldo } from '../types/saldo.type'
import { ISituacaoREHNPC } from '../types/situacao-rehnpc.type'
import { ITipoLancamento } from '../types/tipo-lancamento.type'
import { ITipo } from '../types/tipo.type'
import { ITransferencia } from '../types/transferencia.type'

export interface ICaixasBancosLancamentoParcelaDTO {
  /**
   * Id da parcela do lançamento
   */
  id?: number
}

export interface ICaixasBancosDadosBasicosCategoriaDTO {
  id?: number
  descricao?: string
}

export interface ICaixasBancosLancamentoConciliacaoMovimentacaoDTO {
  /**
   * Id da conciliação da movimentação
   */
  id?: number
}

export interface ICaixasBancosDadosBasicoContatoDTO {
  id?: number
  nome?: string
  cnpj?: string
}

export interface ICaixasBancosDadosBasicosOrigemDTO {
  id?: number
  /**
   * Tipo da origem do lançamento 'caixa' para lançamento de caixas e bancos 'duplicata' para contas a receber/pagar 'bordero' para pagamento/recebimento 'estoque' para estoque
   */
  tipo?: ITipo
}

export interface IContasFinanceirasDadosBasicosDTO {
  id?: number
  descricao?: string
}

export interface IFindParams {
  /**
   * ID do lançamento de caixas e bancos
   */
  idCaixa: number
}

export interface IFindResponse {
  /**
   * Id do lançamento
   */
  id?: number
  /**
   * Tipo de lançamento `D` - Débito `C` - Crédito
   */
  debCred?: IDebCred
  /**
   * É ajuste de saldo após o lançamento `S` - Sim `N` - Não
   */
  saldo?: ISaldo
  /**
   * Situação do lançamento `R` - Registrado `E` - Excluído `H` - Escondido `N` - Não registrado `P` - Processando (externa) `C` - Cancelado (externa)
   */
  situacao?: ISituacaoREHNPC
  /**
   * Tipo do lançamento `1` - Débito `2` - Crédito
   */
  tipoLancamento?: ITipoLancamento
  /**
   * Data do lançamento
   */
  data?: string
  /**
   * Data de competência do lançamento
   */
  competencia?: string
  /**
   * Valor do lançamento
   */
  valor?: number
  /**
   * Observações adicionais sobre o lançamento
   */
  observacoes?: string
  parcela?: ICaixasBancosLancamentoParcelaDTO
  categoria?: ICaixasBancosDadosBasicosCategoriaDTO
  conciliacaoMovimentacao?: ICaixasBancosLancamentoConciliacaoMovimentacaoDTO
  contato?: ICaixasBancosDadosBasicoContatoDTO
  origem?: ICaixasBancosDadosBasicosOrigemDTO
  contaFinanceira?: IContasFinanceirasDadosBasicosDTO
  /**
   * Indica se o lançamento é uma transferência: 'S' para sim, vazio para não.
   */
  transferencia?: ITransferencia
}
