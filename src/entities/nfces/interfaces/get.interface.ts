import IUF from 'src/entities/@shared/types/uf.type'
import { ISituacaoNfce } from '../types/situacao.type'
import { ITipoNfce } from '../types/tipo.type'

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
   *
   */
  situacao?: ISituacaoNfce
  /**
   * Data incial para filtragem das notas fiscais
   */
  dataEmissaoInicial?: Date | string
  /**
   * Data final para filtragem das notas fiscais
   */
  dataEmissaoFinal?: Date | string
}

export interface IGetResponse {
  data: {
    id?: number
    tipo: ITipoNfce
    situacao?: ISituacaoNfce
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
