export interface IOrdensServicoContatoDTO {
  id: number
  nome?: string
}

export interface IOrdensServicoVendedorDTO {
  id: number
}

export interface IOrdensServicoSituacaoDTO {
  id: number
  /**
   * `0` Em aberto `1` Orçada `2` Serviço concluído `3` Finalizada `4` Não aprovada `5` Aprovada `6` Em andamento
   */
  valor?: number
  nome?: string
}

export interface IOrdensServicoDadosListagemDTO {
  id?: number
  numero?: string
  data?: string
  dataPrevista?: string
  total?: number
  observacoesInternas?: string
  contato?: IOrdensServicoContatoDTO
  vendedor?: IOrdensServicoVendedorDTO
  situacao?: IOrdensServicoSituacaoDTO
}

export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
  /**
   * Conjunto de IDs de situações da ordem de serviço
   */
  idsSituacoes?: number[]
  /**
   * Data inicial de entrada
   */
  dataInicial?: Date | string
  /**
   * Data final de entrada
   */
  dataFinal?: Date | string
  /**
   * Data inicial prevista
   */
  dataPrevistaInicial?: Date | string
  /**
   * Data final prevista
   */
  dataPrevistaFinal?: Date | string
  /**
   * Data inicial de conclusão
   */
  dataConclusaoInicial?: Date | string
  /**
   * Data final de conclusão
   */
  dataConclusaoFinal?: Date | string
  /**
   * Data inicial de saída
   */
  dataSaidaInicial?: Date | string
  /**
   * Data final de saída
   */
  dataSaidaFinal?: Date | string
  /**
   * Data inicial de vencimento da garantia
   */
  dataGarantiaInicial?: Date | string
  /**
   * Data final de vencimento da garantia
   */
  dataGarantiaFinal?: Date | string
  /**
   * ID do contato
   */
  idContato?: number
  idVendedor?: number
  /**
   * Número da ordem de serviço
   */
  numero?: string
  /**
   * Número de série do equipamento
   */
  numeroSerie?: string
}

export interface IGetResponse {
  data?: IOrdensServicoDadosListagemDTO[]
}
