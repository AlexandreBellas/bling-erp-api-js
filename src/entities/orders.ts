import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface IOrder {
  data?: Date
  data_saida?: Date
  data_prevista?: Date
  numero?: string
  numero_loja?: string
  loja?: number
  nat_operacao?: string
  vendedor?: string
  cliente: {
    id?: number
    nome: string
    tipoPessoa?: 'F' | 'J'
    cpf_cnpj?: string
    ie?: string
    rg?: string
    contribuinte?: '1' | '2' | '9'
    endereco?: string
    numero?: string
    complemento?: string
    bairro?: string
    cep?: string
    cidade?: string
    uf?: string
    fone?: string
    celular?: string
    email?: string
  }
  transporte?: {
    transportadora?: string
    tipo_frete?: 'R' | 'D' | 'T' | '3' | '4' | 'S'
    servico_correios?: string
    codigo_cotacao?: string
    peso_bruto?: number
    qtde_volumes?: number
    dados_etiqueta?: {
      nome?: string
      endereco?: string
      numero?: string
      complemento?: string
      municipio?: string
      uf?: string
      cep?: string
      bairro?: string
    }
    volumes?: {
      volume: {
        servico: string
        codigoRastreamento?: string
      }[]
    }
  }
  itens?: {
    item?: {
      codigo?: string
      descricao: string
      un?: 'pc' | 'un' | 'cx'
      qtde: number
      vlr_unit: number
      vlr_desconto?: number
    }[]
  }
  idFormaPagamento?: number
  parcelas?: {
    parcela?: {
      dias?: number
      data?: Date
      vlr: number
      obs?: string
      forma_pagamento?: {
        id?: number
      }
    }[]
  }
  vlr_frete?: number
  vlr_desconto?: string
  obs?: string
  obs_internas?: string
  numeroOrdemCompra?: string
  outrasDespesas?: number
  intermediador?: {
    nomeUsuario?: string
    cnpjInstituicaoPagamento?: string
  }
}

export interface IOrderInfos {
  historico?: 'true' | 'false'
}

export interface IOrderFilters {
  dataEmissao?: string
  dataAlteracao?: string
  dataPrevista?: string
  idSituacao?: string
  idContato?: string
}

export interface IOrderResponse {
  desconto: string
  observacoes: string
  observacaointerna: string
  data: string
  numero: string
  numeroOrdemCompra: string
  vendedor: string
  valorfrete: string
  outrasdespesas: string
  totalprodutos: string
  totalvenda: string
  situacao: string
  dataSaida: string
  loja: string
  numeroPedidoLoja: string
  tipoIntegracao: string
  cliente: {
    id: string
    nome: string
    cnpj: string
    ie?: string
    rg?: string
    endereco: string
    numero: string
    complemento: string
    cidade: string
    bairro: string
    cep: string
    uf: string
    email: string
    celular?: string
    fone: string
  }
  nota: {
    serie: string
    numero: string
    dataEmissao: string
    situacao: string
    valorNota: string
    chaveAcesso: string
  }
  transporte: {
    transportadora?: string
    cnpj?: string
    tipo_frete?: string
    qtde_volumes?: string
    enderecoEntrega: {
      nome: string
      endereco: string
      numero: string
      complemento: string
      cidade: string
      bairro: string
      cep: string
      uf: string
    }
    volumes?: {
      volume: {
        id: string
        idServico: string
        idOrigem: string
        servico: string
        codigoServico: string
        codigoRastreamento: string
        valorFretePrevisto: string
        remessa?: string
        dataSaida: string
        prazoEntregaPrevisto: string
        valorDeclarado: string
        avisoRecebimento: boolean
        maoPropria: boolean
        dimensoes: {
          peso: string
          altura: string
          largura: string
          comprimento: string
          diametro: string
        }
        urlRastreamento: string
      }
    }[]
    servico_correios?: string
  }
  itens: {
    item: {
      codigo: string
      descricao: string
      quantidade: number
      valorunidade: number
      precocusto: number
      descontoItem: number
      un: string
      pesoBruto?: number
      largura?: number
      altura?: number
      profundidade?: number
      descricaoDetalhada?: string
      unidadeMedida: string
      gtin?: string
    }
  }[]
  parcelas: {
    parcela: {
      idLancamento: string
      valor: string
      dataVencimento: string
      obs?: string
      destino: string
      forma_pagamento: {
        id: string
        descricao: string
        codigoFiscal: string
      }
    }
  }[]
  codigosRastreamento?: {
    codigoRastreamento?: string
  }
}

export default function Orders (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'pedido',
    pluralName: 'pedidos'
  }

  return Object.assign(config, {
    all: new All<IOrderResponse, IOrderFilters, IOrderInfos>().all,
    find: new Find<IOrderResponse, IOrderInfos>().find,
    findBy: new FindBy<IOrderResponse, IOrderFilters, IOrderInfos>().findBy,
    create: new Create<IOrder, IOrderResponse>().create,
    update: new Update<IOrder, IOrderResponse>().update
  })
}
