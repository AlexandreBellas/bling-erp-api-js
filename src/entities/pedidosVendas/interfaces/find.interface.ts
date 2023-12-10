import IFretePorConta from 'src/entities/@shared/types/frete-por-conta.type'
import ITipoPessoa from 'src/entities/@shared/types/tipoPessoa.type'
import IUF from 'src/entities/@shared/types/uf.type'
import { IDescontoUnidade } from '../types/desconto-unidade.type'

export interface IFindParams {
  /**
   * ID do pedido de venda
   */
  idPedidoVenda: number
}

export interface IFindResponse {
  data: {
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
    notaFiscal?: { id: number }
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
      volumes: {
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
  }
}
