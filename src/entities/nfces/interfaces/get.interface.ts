import IUF from '../../@shared/types/uf.type'
import { ISituacao, ISituacaoFiltro } from '../types/situacao.type'
import { ITipo } from '../types/tipo.type'

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
   * ID do contato do transportador
   */
  idTransportador?: number
  /**
   * Chave de acesso da NFC-e
   */
  chaveAcesso?: number
  /**
   * Número da nota
   */
  numero?: number
  /**
   * Série da nota
   */
  serie?: number
  /**
   *
   */
  situacao?: ISituacaoFiltro
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
    tipo: ITipo
    situacao?: ISituacao
    numero: string
    chaveAcesso?: string
    dataEmissao?: string
    dataOperacao: string
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
    naturezaOperacao: { id: number }
    loja?: { id: number }
  }[]
}
