import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'

export interface IInvoice {
  tipo?: 'S' | 'E'
  finalidade?: '1' | '2' | '3' | '4'
  loja?: number
  numero_loja?: number
  numero_nf?: number
  nat_operacao?: string
  data_operacao?: string
  doc_referenciado?: {
    modelo: '1' | '2' | '2D' | '4' | '55' | '65'
    data?: string
    numero?: number
    serie?: string
    coo?: string
    chave_acesso?: string
  }
  cliente: {
    nome: string
    tipo_pessoa: 'J' | 'F' | 'E'
    cpf_cnpj?: string
    ie_rg?: string
    contribuinte?: '1' | '2' | '9'
    endereco: string
    numero: string
    complemento?: string
    bairro: string
    cep: string
    cidade: string
    uf: string
    pais?: string
    fone?: string
    email: string
  }
  transporte?: {
    transportadora: string
    cpf_cnpj?: string
    ie_rg?: string
    endereco?: string
    cidade?: string
    uf?: string
    placa?: string
    uf_veiculo?: string
    marca?: string
    tipo_frete?: 'R' | 'D' | 'T' | '3' | '4' | 'S'
    qtde_volumes?: number
    especie?: string
    numero?: number
    peso_bruto?: string
    peso_liquido?: string
    servico_correios?: string
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
      volume?: {
        servico: string
        codigoRastreamento?: string
      }
    }[]
  }
  itens?: {
    item: {
      codigo?: string
      descricao: string
      un: 'pc' | 'un' | 'cx'
      qtde: number
      vlr_unit: number
      tipo: 'P' | 'S'
      peso_bruto?: string
      numero_pedido_compra?: number
      peso_liq?: string
      class_fiscal?: string
      cest?: string
      cod_servico?: string
      origem: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
      informacoes_adicionais?: string
    }
  }[]
  parcelas?: {
    parcela: {
      dias?: number
      data?: string
      vlr?: number
      obs?: string
      forma?: string
    }
  }[]
  nf_produtor_rural_referenciada?: {
    numero?: string
    serie?: string
    ano_mes_emissao?: string
  }
  vlr_frete?: string
  vlr_seguro?: string
  vlr_despesas?: string
  vlr_desconto?: string
  obs?: string
  intermediador?: {
    cnpj?: string
    nomeUsuario?: string
  }
}

export interface IInvoiceFilters {
  dataEmissao?: string
  situacao?:
    | 'Pendente'
    | 'Emitida'
    | 'Cancelada'
    | 'Enviada - Aguardando recibo'
    | 'Rejeitada'
    | 'Autorizada'
    | 'Emitida DANFE'
    | 'Registrada'
    | 'Enviada - Aguardando protocolo'
    | 'Denegada'
    | 'Consultar situação'
    | 'Bloqueada'
  tipo?: 'E' | 'S'
}

export type IInvoiceInfos = Record<string, never>

export interface IInvoiceCreateResponse {
  numero: string
  serie: string
  codigos_rastreamento: {
    codigo_rastreamento: string
  }
  volumes: {
    volume: {
      servico: string
      codigoRastreamento: string
    }
  }[]
}

export interface IInvoiceSendResponse {
  situacao: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
  mensagem: string
  erro?: string
  chaveAcesso: string
  linkDanfe: string
}

export interface IInvoiceResponse {
  id: string
  serie: string
  numero: string
  loja: number
  numeroPedidoLoja: string
  tipo: 'E' | 'S'
  situacao:
    | 'Pendente'
    | 'Emitida'
    | 'Cancelada'
    | 'Enviada - Aguardando recibo'
    | 'Rejeitada'
    | 'Autorizada'
    | 'Emitida DANFE'
    | 'Registrada'
    | 'Enviada - Aguardando protocolo'
    | 'Denegada'
    | 'Consultar situação'
    | 'Bloqueada'
  cliente: {
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
    fone: string
  }
  contato: string
  cnpj: string
  vendedor?: string
  dataEmissao: string
  valorNota: number
  chaveAcesso?: string
  xml?: string
  linkDanfe: string
  codigosRastreamento: {
    codigoRastreamento?: string
  }
  cfops: string[]
  tipoIntegracao: string
  transporte: {
    transportadora: string
    cnpj: string
    tipo_frete: 'R' | 'D' | 'T' | '3' | '4' | 'S'
    volumes: {
      volume: {
        id: string
        idServico: string
        servico: string
        codigoServico: string
        codigoRastreamento?: string
        valorFretePrevisto: number
        remessa?: {
          numero: string
          dataCriacao: string
        }
        dataSaida: string
        prazoEntregaPrevisto: number
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
    enderecoEntrega: {
      nome: string
      endereco: string
      numero: string
      complemento?: string
      cidade: string
      bairro: string
      cep: string
      uf: string
    }
  }
}

export default function Invoices (api: IApiInstance) {
  const config = {
    api,
    singularName: 'notafiscal',
    pluralName: 'notasfiscais'
  }

  const find = async (
    numero: number | string,
    serie: number | string,
    options?: {
      raw?: boolean
    }
  ) => {
    const findMethod = new Find<IInvoiceResponse, IInvoiceInfos>(config)

    // @TODO: see how to reuse the code below
    if (options && options.raw) {
      return await findMethod.find(`${numero}/${serie}`, { raw: true })
    } else {
      return await findMethod.find(`${numero}/${serie}`, { raw: false })
    }
  }

  const send = async (
    numero: number | string,
    serie: number | string,
    options?: {
      sendEmail?: boolean
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<Record<never, string>, IInvoiceResponse>({
      ...config,
      endpoint: `${config.singularName}/${numero}/${serie}`
    })

    // @TODO: see how to reuse the code below
    if (options && options.raw) {
      return await createMethod.create(
        {},
        { raw: true },
        {
          sendEmail: options.sendEmail
        }
      )
    } else {
      return await createMethod.create({}, { raw: false })
    }
  }

  const create = async (
    data: IInvoice,
    options?: {
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<Record<never, string>, IInvoiceResponse>({
      ...config,
      endpoint: 'notafiscal',
      singularName: 'notaFiscal'
    })

    // @TODO: see how to reuse the code below
    if (options && options.raw) {
      return await createMethod.create(data, { raw: true })
    } else {
      return await createMethod.create(data, { raw: false })
    }
  }

  return Object.assign(config, {
    all: new All<IInvoiceResponse, IInvoiceFilters, IInvoiceInfos>().all,
    find,
    send,
    findBy: new FindBy<IInvoiceResponse, IInvoiceFilters, IInvoiceInfos>()
      .findBy,
    create
  })
}
