import { ISituacaoConciliacao } from '../types/situacao-conciliacao.type'
import { ISituacao } from '../types/situacao.type'
import { ITipo } from '../types/tipo.type'

export interface ICaixasBancosDadosBasicosOrigemDTO {
  id?: number
  /**
   * Tipo da origem do lançamento 'caixa' para lançamento de caixas e bancos 'duplicata' para contas a receber/pagar 'bordero' para pagamento/recebimento 'estoque' para estoque
   */
  tipo?: ITipo
}

export interface ICaixasBancosDadosBasicoContatoDTO {
  id?: number
  nome?: string
  cnpj?: string
}

export interface IContasFinanceirasDadosBasicosDTO {
  id?: number
  descricao?: string
}

export interface ICaixasBancosItemLancamentoDTO {
  /**
   * ID do lançamento de caixas e bancos
   */
  id?: string
  /**
   * Débito ou crédito
   */
  debCred?: string
  /**
   * Situação
   */
  situacao?: string
  /**
   * Valor
   */
  valor?: number
  /**
   * Data
   */
  data?: string
  /**
   * Observações
   */
  observacoes?: string
  /**
   * Descrição
   */
  descricao?: string
  origem?: ICaixasBancosDadosBasicosOrigemDTO
  contato?: ICaixasBancosDadosBasicoContatoDTO
  contaFinanceira?: IContasFinanceirasDadosBasicosDTO
}

export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Data inicial de consulta de movimentações, só serão retornados os lançamentos a partir dessa data. Deve ser informada no formato AAAA-MM-DD. Caso não informado, o padrão será o primeiro dia do mês atual.
   */
  dataInicial?: Date | string
  /**
   * Data final de consulta de movimentações, só serão retornados os lançamentos até essa data. Deve ser informada no formato AAAA-MM-DD. Caso não informado, o padrão será o último dia do mês atual.
   */
  dataFinal?: Date | string
  /**
   * IDs das categorias de movimentações.
   */
  idsCategorias?: number[]
  /**
   * ID da conta financeira.
   */
  idContaFinanceira?: number
  /**
   * Pesquisa por descrição do lançamento.
   */
  pesquisa?: string
  /**
   * Valor do lançamento.
   */
  valor?: number
  /**
   * Situação da conciliação do lançamento `1` Registros conciliados `2` Registros não conciliados `3` Todos os registros
   */
  situacaoConciliacao?: ISituacaoConciliacao
  /**
   * Situação do lançamento. 'R' para registros 'E' para excluídos
   */
  situacao?: ISituacao
}

export interface IGetResponse {
  data?: ICaixasBancosItemLancamentoDTO[]
}
