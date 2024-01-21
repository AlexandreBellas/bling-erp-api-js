import IUF from 'src/entities/@shared/types/uf.type'
import { ISituacaoNfe } from '../types/situacao.type'
import { ITipoNfe } from '../types/tipo.type'

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
   * Número do pedido na loja
   */
  numeroLoja?: string
  /**
   *
   */
  situacao?: ISituacaoNfe
  /**
   *
   */
  tipo?: ITipoNfe
  /**
   * Data e hora incial de emissão
   */
  dataEmissaoInicial?: string
  /**
   * Data e hora final de emissão
   */
  dataEmissaoFinal?: string
}

export interface IGetResponse {
  data: {
    id?: number
    tipo: ITipoNfe
    situacao?: ISituacaoNfe
    numero?: string
    dataEmissao?: string
    dataOperacao?: string
    contato: {
      id?: number
      nome: string
      numeroDocumento: string
      ie?: string
      rg?: string
      telefone?: string
      email?: string
      endereco?: {
        endereco: string
        numero?: string
        complemento?: string
        bairro: string
        cep?: string
        municipio: string
        uf?: IUF
        pais?: string
      }
    }
    naturezaOperacao?: { id: number }
    loja?: { id: number }
  }[]
}
