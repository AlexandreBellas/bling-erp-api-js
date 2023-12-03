import { IContribuinte } from 'src/entities/@shared/types/contribuinte.type'
import { IFretePorConta } from 'src/entities/@shared/types/frete-por-conta.type'
import { IOrigem } from 'src/entities/@shared/types/origem.type'
import ITipoPessoa from 'src/entities/@shared/types/tipoPessoa.type'
import IUF from 'src/entities/@shared/types/uf.type'
import { IFinalidadeNfce } from '../types/finalidade.type'
import { IModeloDocumentoReferenciadoNfce } from '../types/modelo-documento-referenciado.type'
import { ITipoItemNfce } from '../types/tipo-item.type'
import { ITipoNfce } from '../types/tipo.type'

export interface IUpdateParams {
  /**
   * ID da nota fiscal de consumidor
   */
  idNotaFiscalConsumidor: number
}

export interface IUpdateBody {
  tipo: ITipoNfce
  numero?: string
  dataOperacao?: string
  contato: {
    nome: string
    tipoPessoa: ITipoPessoa
    numeroDocumento: string
    ie?: string
    rg?: string
    contribuinte?: IContribuinte
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
  loja?: {
    id: number
    numero: string
  }
  finalidade?: IFinalidadeNfce
  seguro?: number
  despesas?: number
  desconto?: number
  observacoes?: string
  documentoReferenciado?: {
    modelo: IModeloDocumentoReferenciadoNfce
    data?: string
    numero?: string
    serie?: string
    contadorOrdemOperacao?: string
    chaveAcesso?: string
  }
  itens?: {
    codigo: string
    descricao?: string
    unidade?: string
    quantidade?: number
    valor?: number
    tipo?: ITipoItemNfce
    pesoBruto?: number
    pesoLiquido?: number
    numeroPedidoCompra?: string
    classificacaoFiscal?: string
    cest?: string
    codigoServico?: string
    origem?: IOrigem
    informacoesAdicionais?: string
  }[]

  parcelas?: {
    data: string
    valor: number
    observacoes?: string
    formaPagamento?: { id: number }
  }[]

  transporte?: {
    fretePorConta?: IFretePorConta
    frete?: number
    veiculo?: {
      placa?: string
      uf?: IUF
      marca?: string
    }
    transportador?: {
      nome: string
      numeroDocumento?: string
      ie?: string
      endereco?: {
        endereco?: string
        municipio?: string
        uf?: IUF
      }
    }
    volume?: {
      quantidade?: number
      especie?: string
      numero?: string
      pesoBruto?: number
      pesoLiquido?: number
    }
    volumes: {
      servico: string
      codigoRastreamento?: string
    }[]

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
  notaFiscalProdutorRuralReferenciada?: {
    numero: string
    serie: string
    data: string
  }
  intermediador?: {
    cnpj: string
    nomeUsuario: string
  }
}

export interface IUpdateResponse {
  data: {
    id: number
    numero: string
    serie: string
    contato: { nome?: string }
  }
}
