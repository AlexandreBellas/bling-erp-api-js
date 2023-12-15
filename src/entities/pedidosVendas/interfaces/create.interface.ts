import { IDefaultErrorFieldsResponse } from 'src/entities/@shared/interfaces/error.interface'
import IFretePorConta from 'src/entities/@shared/types/frete-por-conta.type'
import ITipoPessoa from 'src/entities/@shared/types/tipoPessoa.type'
import IUF from 'src/entities/@shared/types/uf.type'
import { IDescontoUnidade } from '../types/desconto-unidade.type'

export interface ICreateBody {
  numero?: number
  numeroLoja?: string
  data: string
  dataSaida: string
  dataPrevista: string
  contato: {
    id: number
    tipoPessoa?: ITipoPessoa
    numeroDocumento?: string
  }
  loja?: { id: number }
  numeroPedidoCompra?: string
  outrasDespesas?: number
  observacoes?: string
  observacoesInternas?: string
  desconto?: {
    valor: number
    unidade?: IDescontoUnidade
  }
  categoria?: { id: number }
  tributacao?: {
    totalICMS?: number
    totalIPI?: number
  }
  itens: {
    id: number
    codigo?: string
    unidade?: string
    quantidade: number
    desconto?: number
    valor: number
    aliquotaIPI?: number
    descricao: string
    descricaoDetalhada?: string
    produto?: { id: number }
    comissao?: {
      base?: number
      aliquota?: number
      valor?: number
    }
  }[]
  parcelas: {
    id: number
    dataVencimento: string
    valor: number
    observacoes?: string
    formaPagamento: { id: number }
  }[]
  transporte?: {
    fretePorConta?: IFretePorConta
    frete?: number
    quantidadeVolumes?: number
    pesoBruto?: number
    prazoEntrega?: number
    contato?: {
      id?: number
      nome: string
    }
    etiqueta?: {
      nome?: string
      endereco?: string
      numero?: string
      complemento?: string
      municipio?: string
      uf?: IUF
      cep?: string
      bairro?: string
      nomePais?: string
    }
    volumes?: {
      id: number
      servico: string
      codigoRastreamento?: string
    }[]
  }
  vendedor?: { id: number }
  intermediador?: {
    cnpj?: string
    nomeUsuario?: string
  }
  taxas?: {
    taxaComissao?: number
    custoFrete?: number
    valorBase?: number
  }
}

export interface ICreateResponse {
  data: {
    id: number
    alertas?: IDefaultErrorFieldsResponse[]
    rastreamento?: { description?: string }
  }
}
