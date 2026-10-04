import IFretePorConta from '../../@shared/types/frete-por-conta.type'
import IModalidadeIcms from '../../@shared/types/modalidade-icms.type'
import IOrigem from '../../@shared/types/origem.type'
import ITipoItem from '../../@shared/types/tipo-item.type'
import IUF from '../../@shared/types/uf.type'
import { IFinalidadeNfce } from '../types/finalidade.type'
import { ISituacaoNfce } from '../types/situacao.type'
import { ITipoNfce } from '../types/tipo.type'

export interface IFindParams {
  /**
   * ID da nota fiscal de consumidor
   */
  idNotaFiscalConsumidor: number
}

export interface IFindResponse {
  data: {
    id?: number
    tipo: ITipoNfce
    situacao?: ISituacaoNfce
    numero: string
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
    serie: number
    valorNota?: number
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
    finalidade?: IFinalidadeNfce
    tipoNota?: string
    valorFrete?: number
    optanteSimplesNacional?: boolean
    intermediador?: {
      cnpj: string
      nomeUsuario: string
    }
    itens?: {
      codigo: string
      descricao?: string
      unidade?: string
      quantidade?: number
      valor?: number
      valorTotal?: number
      tipo?: ITipoItem
      pesoBruto?: number
      pesoLiquido?: number
      numeroPedidoCompra?: string
      classificacaoFiscal?: string
      cest?: string
      codigoServico?: string
      origem?: IOrigem
      informacoesAdicionais?: string
      gtin?: string
      cfop?: string
      impostos?: {
        valorAproximadoTotalTributos?: number
        icms?: {
          st?: number
          origem?: IOrigem
          modalidade?: IModalidadeIcms
          aliquota?: number
          valor?: number
        }
      }
      unidadeTributavel?: {
        unidade?: string
        quantidade?: number
      }
      exportacao?: {
        drawback?: string
        registroExportacao?: string
        chaveAcessoNFe?: string
      }
    }[]
    parcelas?: {
      data: string
      valor: number
      observacoes?: string
      /**
       * cAut (ou NSU): código de autorização da operação financeira.
       */
      caut?: string
      formaPagamento?: { id: number }
    }[]
  }
}
