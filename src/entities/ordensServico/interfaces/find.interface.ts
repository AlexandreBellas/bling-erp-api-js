import { IUnidade } from '../types/unidade.type'

export interface IOrdensServicoDescontoDTO {
  valor: number
  unidade?: IUnidade
}

export interface IOrdensServicoLojaUnidadeNegocioDTO {
  id: number
}

export interface IOrdensServicoLojaDTO {
  id: number
  unidadeNegocio?: IOrdensServicoLojaUnidadeNegocioDTO
}

export interface IOrdensServicoContatoDTO {
  id: number
  nome?: string
}

export interface IOrdensServicoVendedorDTO {
  id: number
}

export interface IOrdensServicoCategoriaDTO {
  /**
   * ID da categoria de receita e despesa utilizada no lançamento financeiro
   */
  id: number
}

export interface IOrdensServicoProdutoDTO {
  id: number
  nome?: string
  codigo?: string
}

export interface IOrdensServicoItemServicoDTO {
  produto: IOrdensServicoProdutoDTO
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

export interface IOrdensServicoItemPecaDTO {
  produto: IOrdensServicoProdutoDTO
  quantidade: number
  unidade?: string
  valorUnitario?: number
  precoLista?: number
  /**
   * Valor percentual.
   */
  desconto?: number
}

export interface IOrdensServicoFormaPagamentoDTO {
  id: number
}

export interface IOrdensServicoParcelaDTO {
  dataVencimento?: string
  valor: number
  observacoes?: string
  formaPagamento: IOrdensServicoFormaPagamentoDTO
}

export interface IOrdensServicoSituacaoDTO {
  id: number
  /**
   * `0` Em aberto `1` Orçada `2` Serviço concluído `3` Finalizada `4` Não aprovada `5` Aprovada `6` Em andamento
   */
  valor?: number
  nome?: string
}

export interface IFindParams {
  /**
   * ID da ordem de serviço
   */
  idOrdemServico: number
}

export interface IFindResponse {
  data?: {
    id?: number
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
    desconto?: IOrdensServicoDescontoDTO
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
    loja?: IOrdensServicoLojaDTO
    contato: IOrdensServicoContatoDTO
    vendedor?: IOrdensServicoVendedorDTO
    categoria?: IOrdensServicoCategoriaDTO
    servicos?: IOrdensServicoItemServicoDTO[]
    pecas?: IOrdensServicoItemPecaDTO[]
    parcelas?: IOrdensServicoParcelaDTO[]
    situacao?: IOrdensServicoSituacaoDTO
    idNotaFiscal?: number
    idNotaServico?: number
    /**
     * ID do documento que originou a ordem de serviço
     */
    idOrigem?: number
  }
}
