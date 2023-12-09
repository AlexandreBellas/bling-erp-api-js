import ITipoPessoa from 'src/entities/@shared/types/tipoPessoa.type'

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
   * ID do contato
   */
  idContato?: number
  /**
   * Conjunto de situações
   */
  idsSituacoes?: number[]
  /**
   * Data inicial
   */
  dataInicial?: Date | string
  /**
   * Data final
   */
  dataFinal?: Date | string
  /**
   * Data inicial da alteração
   */
  dataAlteracaoInicial?: Date | string
  /**
   * Data final da alteração
   */
  dataAlteracaoFinal?: Date | string
  /**
   * Data inicial prevista
   */
  dataPrevistaInicial?: Date | string
  /**
   * Data final prevista
   */
  dataPrevistaFinal?: Date | string
  /**
   * Número do pedido de venda
   */
  numero?: number
  /**
   * ID da loja
   */
  idLoja?: number
  /**
   * ID do vendedor
   */
  idVendedor?: number
  /**
   * ID do controle de caixa
   */
  idControleCaixa?: number
  /**
   * Conjunto de números de pedidos nas lojas
   */
  numerosLojas?: string[]
}

export interface IGetResponse {
  data: [
    {
      id?: number
      numero?: number
      numeroLoja?: string
      data: string
      dataSaida: string
      dataPrevista: string
      totalProdutos?: number
      total?: number
      contato: {
        id: number
        nome: string
        tipoPessoa?: ITipoPessoa
        numeroDocumento?: string
      }
      situacao?: {
        id: number
        valor: number
      }
      loja?: {
        id: number
      }
    }
  ]
}
