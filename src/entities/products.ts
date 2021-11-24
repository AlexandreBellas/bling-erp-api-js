import BlingEntity from '../core/entity'
import { AxiosInstance as IAxiosInstance } from 'axios'

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
    url?: string
  }[]
  idCategoria?: number
  estrutura?: {
    tipoEstoque?: 'F' | 'V'
    lancarEstoque?: 'P' | 'C' | 'PC'
    componente: {
      nome: string
      codigo: string
      quantidade: number
    }
  }
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

export interface IProductResponse {
  id: string
  codigo: string
  descricao: string
  tipo: 'S' | 'P' | 'N'
  situacao: 'Ativo' | 'Inativo'
  unidade?: 'PC' | 'UN' | 'CX'
  preco: string
  precoCusto: string
  descricaoCurta: string
  descricaoComplementar: string
  dataInclusao: string
  dataAlteracao: string
  imageThumbnail?: string
  urlVideo?: string
  nomeFornecedor: string
  codigoFabricante: string
  marca?: string
  class_fiscal?: string
  cest?: string
  origem?: string
  idGrupoProduto?: string
  linkExterno?: string
  observacoes?: string
  grupoProduto?: string
  garantia: string
  descricaoFornecedor: string
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
  produtoLoja: {
    idProdutoLoja: string
    preco: {
      preco: number
      precoPromocional: string
    }
    dataInclusao: string
    dataAlteracao: string
  }
  estoqueAtual: number
  depositos: {
    deposito: {
      id: string
      nome: string
      saldo: number
      desconsiderar: 'S' | 'N'
      saldoVirtual: number
    }
  }[]
}

export default class Products extends BlingEntity<
  IProduct,
  IProductFilters,
  IProductInfos,
  IProductResponse
> {
  constructor (api: IAxiosInstance, apiKey: string) {
    super(api, apiKey)

    this.singularName = 'produto'
    this.pluralName = 'produtos'
  }

  async findBySupplierCode (
    code: number | string,
    supplierId: number | string,
    params?: IProductInfos,
    raw?: boolean
  ) {
    return await this._find(
      this.singularName,
      `${code}/${supplierId}`,
      params,
      raw
    )
  }
}
