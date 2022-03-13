import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Delete from '../core/functions/delete'

export interface IProduct {
  codigo: string
  codigoItem?: '06' | '21' | '22'
  descricao: string
  tipo?: 'S' | 'P' | 'N'
  situacao?: 'Ativo' | 'Inativo'
  descricaoCurta?: string
  descricaoComplementar?: string
  un?: 'pc' | 'un' | 'cx'
  vlr_unit?: number
  preco_custo?: number
  peso_bruto?: number
  peso_liq?: number
  class_fiscal?: string
  marca?: string
  cest?: string
  origem?: string
  idGrupoProduto?: number
  condicao?: 'Não especificado' | 'Novo' | 'Usado'
  freteGratis?: 'S' | 'N'
  linkExterno?: string
  observacoes?: string
  producao?: 'T' | 'P'
  unidadeMedida?: 'Metros' | 'Centimetros' | 'Milimetro'
  dataValidade?: Date
  descricaoFornecedor?: string
  idFabricante?: number
  codigoFabricante?: string
  estoque?: number
  deposito?: {
    id?: number
    estoque?: number
  }
  gtin?: string
  gtinEmbalagem?: string
  largura?: string
  altura?: string
  profundidade?: string
  estoqueMinimo?: number
  estoqueMaximo?: number
  itensPorCaixa?: number
  volumes?: number
  urlVideo?: string
  localizacao?: string
  crossdocking?: number
  garantia?: number
  spedTipoItem?:
    | '00'
    | '01'
    | '02'
    | '03'
    | '04'
    | '05'
    | '06'
    | '07'
    | '08'
    | '09'
    | '10'
    | '99'
  variacoes?: {
    variacao: {
      nome: string
      codigo?: string
      vlr_unit?: number
      clonarDadosPai?: 'S' | 'N'
      estoque?: number
      deposito?: {
        id?: number
        estoque?: number
      }
      un?: string
    }[]
  }
  imagens?: {
    url?: string[]
  }
  idCategoria?: number
  estrutura?: {
    tipoEstoque?: 'F' | 'V'
    lancarEstoque?: 'P' | 'C' | 'PC'
    componente: {
      nome: string
      codigo: string
      quantidade: number
    }[]
  }
  camposCustomizados?: unknown
}

export interface IProductInfos {
  estoque?: 'S'
  loja?: string
  imagem?: 'S'
}

export interface IProductFilters {
  dataInclusao?: string
  dataAlteracao?: string
  dataAlteracaoLoja?: string
  dataInclusaoLoja?: string
  tipo?: 'P' | 'S'
  situacao?: 'A' | 'I'
}

// @TODO: conditional response content based on info passed
export interface IProductResponse {
  id: string
  codigo?: string
  descricao: string
  tipo: 'S' | 'P' | 'N'
  situacao: 'Ativo' | 'Inativo'
  unidade?: 'PC' | 'UN' | 'CX'
  preco: string
  precoCusto: string
  descricaoCurta?: string
  descricaoComplementar?: string
  dataInclusao: string
  dataAlteracao: string
  imageThumbnail?: string
  urlVideo?: string
  nomeFornecedor?: string
  codigoFabricante?: string
  marca?: string
  class_fiscal?: string
  cest?: string
  origem?: string
  idGrupoProduto?: string
  linkExterno?: string
  observacoes?: string
  grupoProduto?: string
  garantia: string
  descricaoFornecedor?: string
  idFabricante: string
  categoria: {
    id: string
    descricao: string
  }
  pesoLiq: string
  pesoBruto: string
  estoqueMinimo: string
  estoqueMaximo: string
  gtin?: string
  gtinEmbalagem?: string
  larguraProduto: string
  alturaProduto: string
  profundidadeProduto: string
  unidadeMedida: 'Metros' | 'Centímetros' | 'Milímetros'
  itensPorCaixa: number
  volumes: number
  localizacao?: string
  crossdocking: string
  condicao: 'Não especificado' | 'Novo' | 'Usado'
  freteGratis: 'N' | 'S'
  producao: 'T' | 'P'
  dataValidade: string
  spedTipoItem?: string
  imagem?: {
    // imagem = S
    link: string
    validade: string
    tipoArmazenamento: 'interno' | 'externo'
  }[]
  produtoLoja?: {
    // loja !== undefined
    idProdutoLoja: string
    preco: {
      preco: number
      precoPromocional: string
    }
    dataInclusao: string
    dataAlteracao: string
  }
  codigopai?: string
  estoqueAtual: number // estoque = 'S'
  depositos?: {
    // estoque = 'S'
    deposito: {
      id: string
      nome: string
      saldo: number
      desconsiderar: 'S' | 'N'
      saldoVirtual: number
    }
  }[]
}

export interface IProductDeleteResponse {
  codigo: string
  mensagem: string
}

export default function Products (api: IApiInstance) {
  const config = {
    api,
    singularName: 'produto',
    pluralName: 'produtos'
  }

  const update = async (
    id: number | string,
    data: IProduct,
    options?: { raw?: boolean }
  ) => {
    const createMethod = new Create<IProduct, IProductResponse>({
      ...config,
      endpoint: `${config.singularName}/${id}`
    })

    if (options && options.raw) {
      return await createMethod.create(data, { raw: true })
    } else {
      return await createMethod.create(data, { raw: false })
    }
  }

  const findBySupplierCode = async (
    code: number | string,
    supplierId: number | string,
    options?: {
      params?: IProductInfos
      raw?: boolean
    }
  ) => {
    const findMethod = new Find<IProductResponse, IProductInfos>(config)

    // @TODO: see how to reuse the code below
    if (options) {
      if (options.raw) {
        return await findMethod.find(`${code}/${supplierId}`, {
          params: options.params,
          raw: true
        })
      } else {
        return await findMethod.find(`${code}/${supplierId}`, {
          params: options.params,
          raw: false
        })
      }
    } else {
      return await findMethod.find(`${code}/${supplierId}`)
    }
  }

  return Object.assign(config, {
    all: new All<IProductResponse, IProductFilters, IProductInfos>().all,
    find: new Find<IProductResponse, IProductInfos>().find,
    findBy: new FindBy<IProductResponse, IProductFilters, IProductInfos>()
      .findBy,
    create: new Create<IProduct, IProductResponse>().create,
    update,
    delete: new Delete<IProductDeleteResponse>().delete,
    findBySupplierCode
  })
}
