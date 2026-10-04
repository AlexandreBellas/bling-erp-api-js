import { IUnidade } from '../types/unidade.type'

export interface IOrdensServicoDescontoDTOWrite {
  valor: number
  unidade?: IUnidade
}

export interface IOrdensServicoLojaUnidadeNegocioDTOWrite {
  id: number
}

export interface IOrdensServicoLojaDTOWrite {
  id: number
  unidadeNegocio?: IOrdensServicoLojaUnidadeNegocioDTOWrite
}

export interface IOrdensServicoContatoDTOWrite {
  id: number
}

export interface IOrdensServicoVendedorDTOWrite {
  id: number
}

export interface IOrdensServicoCategoriaDTOWrite {
  /**
   * ID da categoria de receita e despesa utilizada no lançamento financeiro
   */
  id: number
}

export interface IOrdensServicoProdutoDTOWrite {
  id: number
  nome?: string
  codigo?: string
}

export interface IOrdensServicoItemServicoDTOWrite {
  produto: IOrdensServicoProdutoDTOWrite
  /**
   * Quantidade de horas do serviço
   */
  horas?: number
  valorUnitario?: number
  valorTotal?: number
  precoLista?: number
  /**
   * Valor percentual.
   */
  desconto?: number
  /**
   * Indica se o serviço faz parte do orçamento
   */
  orcar?: boolean
  /**
   * Indica se o serviço foi concluído
   */
  concluido?: boolean
}

export interface IOrdensServicoItemPecaDTOWrite {
  produto: IOrdensServicoProdutoDTOWrite
  quantidade: number
  unidade?: string
  valorUnitario?: number
  precoLista?: number
  /**
   * Valor percentual.
   */
  desconto?: number
}

export interface IOrdensServicoFormaPagamentoDTOWrite {
  id: number
}

export interface IOrdensServicoParcelaDTOWrite {
  dataVencimento?: string
  valor: number
  observacoes?: string
  formaPagamento: IOrdensServicoFormaPagamentoDTOWrite
}

export interface IBasePostResponse {
  id: number
}

export interface ICreateBody {
  numero?: string
  /**
   * Data de entrada
   */
  data?: string
  dataPrevista?: string
  dataConclusao?: string
  dataSaida?: string
  horaInicio?: string
  horaFim?: string
  equipamento?: string
  numeroSerieEquipamento?: string
  descricaoProblema?: string
  observacoes?: string
  observacoesServico?: string
  observacoesInternas?: string
  garantia?: string
  diasGarantia?: number
  desconto?: IOrdensServicoDescontoDTOWrite
  valorFrete?: number
  totalPecas?: number
  totalServicos?: number
  total?: number
  /**
   * Indica que a ordem de serviço deve ser orçada
   */
  orcar?: boolean
  /**
   * Indica que a ordem de serviço já foi orçada
   */
  orcado?: boolean
  /**
   * Nome do técnico informado manualmente
   */
  tecnico?: string
  /**
   * IDs dos contatos técnicos vinculados
   */
  tecnicos?: number[]
  loja?: IOrdensServicoLojaDTOWrite
  contato: IOrdensServicoContatoDTOWrite
  vendedor?: IOrdensServicoVendedorDTOWrite
  categoria?: IOrdensServicoCategoriaDTOWrite
  servicos?: IOrdensServicoItemServicoDTOWrite[]
  pecas?: IOrdensServicoItemPecaDTOWrite[]
  parcelas?: IOrdensServicoParcelaDTOWrite[]
}

export interface ICreateResponse {
  data?: IBasePostResponse
}
