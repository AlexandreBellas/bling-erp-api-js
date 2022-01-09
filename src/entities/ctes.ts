import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'
import Delete from '../core/functions/delete'

export interface ICte {
  pedido: {
    xml: string
  }
}

export interface ICteFilters {
  dataEmissao?: string
}

export type ICteInfos = Record<string, never>

export interface ICteDeleteResponse {
  id: string
  mensagem: string
}

export interface ICteResponse {
  id: string
  serie: string
  numero: string
  natureza: string
  cfop: string
  dataEmissao: string
  situacao: string
  tipoCte: string
  tipoServico: string
  modal: string
  municipioInicio: string
  UFInicio: string
  municipioFim: string
  UFFim: string
  cst: string
  baseCalculo: string
  aliquotaIcms: string
  valorIcms: string
  valorPis: string
  valorCofins: string
  valorIr: string
  valorInss: string
  valorCsll: string
  valorTotal: string
  rntrc: string
  emissor: {
    nome: string
    cnpj: string
    ie: string
    endereco: string
    numero: string
    complemento?: string
    bairro: string
    cep: string
    municipio: string
    uf: string
    fone: string
  }
  remetente: {
    nome: string
    cnpj: string
    ie: string
    endereco: string
    numero: string
    complemento?: string
    bairro: string
    cep: string
    municipio: string
    uf: string
    fone?: string
    email?: string
  }
  destinatario: {
    nome: string
    cnpj: string
    ie: string
    endereco: string
    numero: string
    complemento: string
    bairro: string
    cep: string
    municipio: string
    uf: string
    fone?: string
    email?: string
  }
  autorizacao: {
    chave: string
    dataRecebimento: string
    numeroProtocolo: string
  }
  nota: {
    chave: string
  }
}

export default function Ctes (api: IApiInstance) {
  const config = {
    api,
    singularName: 'cte',
    pluralName: 'ctes'
  }

  const find = async (
    numero: number | string,
    serie: number | string,
    options?: {
      params?: ICteInfos
      raw?: boolean
    }
  ) => {
    const findMethod = new Find<ICteResponse, ICteInfos>(config)

    // @TODO: see how to reuse the code below
    if (options) {
      if (options.raw) {
        return await findMethod.find(`${numero}/${serie}`, {
          params: options.params,
          raw: true
        })
      } else {
        return await findMethod.find(`${numero}/${serie}`, {
          params: options.params,
          raw: false
        })
      }
    } else {
      return await findMethod.find(`${numero}/${serie}`)
    }
  }

  const create = async (
    data: ICte,
    options?: {
      loja?: number | string
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<ICte, ICteResponse>(config)

    // @TODO: see how to reuse the code below
    if (options) {
      if (options.raw) {
        return await createMethod.create(data, { raw: true }, options.loja)
      } else {
        return await createMethod.create(data, { raw: false }, options.loja)
      }
    } else {
      return await createMethod.create(data, { raw: false })
    }
  }

  const post = async (
    id: number | string,
    options?: {
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<undefined, ICteResponse>({
      ...config,
      endpoint: `/cte/lancamento/contas/${id}`
    })

    // @TODO: see how to reuse the code below
    if (options && options.raw) {
      return await createMethod.create(undefined, { raw: true })
    } else {
      return await createMethod.create(undefined, { raw: false })
    }
  }

  const customDelete = async (
    id: number | string,
    options?: {
      raw?: boolean
    }
  ) => {
    const deleteMethod = new Delete<ICteDeleteResponse>({
      ...config,
      endpoint: '/cte/estorno/contas'
    })

    // @TODO: see how to reuse the code below
    if (options && options.raw) {
      return await deleteMethod.delete(id, { raw: true })
    } else {
      return await deleteMethod.delete(id, { raw: false })
    }
  }

  return Object.assign(config, {
    all: new All<ICteResponse, ICteFilters>().all,
    find,
    findBy: new FindBy<ICteResponse, ICteFilters>().findBy,
    create,
    post,
    update: new Update<ICte, ICteResponse>().update,
    delete: customDelete
  })
}
