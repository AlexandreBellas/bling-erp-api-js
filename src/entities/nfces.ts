import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'

import IUFs from './types/uf'
import ITipoPessoa from './types/tipoPessoa'
import IContribuinte from './types/contribuinte'
import IUn from './types/un'
import IOrigem from './types/origem'
import ITipoFrete from './types/tipoFrete'

type ISituacaoNumber =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'

type ISituacaoName =
  | 'Todas'
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

export interface INfce {
  tipo?: 'E' | 'S'
  numero_loja?: string
  nat_operacao?: string
  data_operacao?: Date
  nome: string
  tipo_pessoa: ITipoPessoa
  cpf_cnpj?: string
  ie_rg?: string
  contribuinte?: IContribuinte
  endereco: string
  numero: string
  complemento?: string
  bairro: string
  cep: string
  cidade: string
  uf: IUFs
  pais?: string
  fone?: string
  email: string
  transporte: {
    transportadora?: string
    cpf_cnpj?: string
    ie_rg?: string
    endereco?: string
    cidade?: string
    uf?: string
    placa?: string
    uf_veiculo?: string
    marca?: string
    tipo_frete?: ITipoFrete
    qtde_volumes?: number
    especie?: string
    numero?: string
    peso_bruto?: number
    peso_liquido?: number
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
  }
  itens: {
    item: {
      codigo?: string
      descricao: string
      un: IUn
      qtde: number
      vlr_unit: number
      tipo: 'P' | 'S'
      peso_bruto?: number
      peso_liq?: number
      class_fiscal?: string
      cest?: string
      cod_servico?: string
      origem: IOrigem
    }
  }[]
  parcelas: {
    parcela: {
      dias?: number
      data?: Date
      vlr?: number
      obs?: string
      forma?: string
    }
  }[]
  nf_produtor_rural_referenciada: {
    numero?: string
    serie?: string
    ano_mes_emissao?: string
  }
  vlr_frete?: number
  vlr_seguro?: number
  vlr_despesas?: number
  vlr_desconto?: string
  obs?: string
  intermediador?: {
    cnpj?: string
    nomeUsuario?: string
  }
}

export interface INfceFilters {
  dataEmissao?: string
  situacao?: ISituacaoNumber
}

export type INfceInfos = Record<string, never>

export interface INfceCreateResponse {
  numero: string
  codigos_rastreamento: {
    codigo_rastreamento: string
  }
}

export interface INfceSendResponse {
  situacao: ISituacaoNumber
  mensagem: string
  erro?: string
  chaveAcesso: string
  linkDanfe: string
}

export interface INfceResponse {
  serie: string
  numero: string
  numeroPedidoLoja: string
  loja: number
  tipo: 'E' | 'S'
  situacao: ISituacaoName
  contato: string
  vendedor?: string
  dataEmissao: string
  valorNota: number
  chaveAcesso: string
  xml?: string
  linkDanfe?: string
  tipoIntegracao: string
  codigosRastreamento: {
    codigoRastreamento: string
  }
  transporte: {
    transportadora: string
    tipo_frete: ITipoFrete
    servico_correios: string
    volumes: {
      idServico: number
      servico: string
      codigoRastreamento: string
      dataSaida: string
      prazoEntregaPrevisto: number
      valorFretePrevisto: number
    }[]
    enderecoEntrega: {
      nome: string
      endereco: string
      numero: string
      complemento?: string
      cidade: string
      bairro: string
      cep: string
      uf: IUFs
    }
  }
}

export default function Nfces (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'nfce',
    pluralName: 'nfces'
  }

  const send = async (
    numero: number | string,
    serie: number | string,
    options?: {
      sendEmail?: boolean
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<Record<never, string>, INfceResponse>({
      ...config,
      endpoint: `${config.singularName}/${numero}/${serie}`
    })

    const raw = options && options.raw !== undefined ? options.raw : config.raw

    // @TODO: see how to reuse the code below
    if (options) {
      if (raw) {
        return await createMethod.create(
          {},
          { raw: true },
          {
            sendEmail: options.sendEmail
          }
        )
      } else {
        return await createMethod.create(
          {},
          { raw: false },
          {
            sendEmail: options.sendEmail
          }
        )
      }
    } else {
      return await createMethod.create({})
    }
  }

  return Object.assign(config, {
    all: new All<INfceResponse, INfceFilters, INfceInfos>().all,
    find: new Find<INfceResponse, INfceInfos>().find,
    findBy: new FindBy<INfceResponse, INfceFilters, INfceInfos>().findBy,
    create: new Create<INfce, INfceCreateResponse>().create,
    send
  })
}
