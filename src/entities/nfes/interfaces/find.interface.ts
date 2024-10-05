import IFretePorConta from 'src/entities/@shared/types/frete-por-conta.type'
import IUF from 'src/entities/@shared/types/uf.type'
import { ISituacaoNfe } from '../types/situacao.type'
import { ITipoNfe } from '../types/tipo.type'

export interface IFindParams {
  /**
   * ID da nota fiscal
   */
  idNotaFiscal: number
}

export interface IFindResponse {
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
    serie?: number
    chaveAcesso?: string
    xml?: string
    linkDanfe?: string
    linkPDF?: string
    numeroPedidoLoja?: string
    transporte?: {
      fretePorConta?: IFretePorConta
      transportador?: {
        nome: string
        numeroDocumento?: string
      }
      volumes?: { id?: number }[]
      etiqueta?: {
        nome?: string
        endereco?: string
        numero?: string
        complemento?: string
        municipio?: string
        uf?: IUF
        cep?: string
        bairro?: string
      }
    }
    vendedor?: {
      id: number
    }
  }
}
