import BlingEntity from '../core/entity'
import { AxiosInstance as IAxiosInstance } from 'axios'

export interface IProduct {
  codigo?: string
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
  deposito: {
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

export interface IProductError {
  code:
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '54'
}

export default class Products extends BlingEntity<
  IProduct,
  IProductFilters,
  IProductInfos,
  IProductError
> {
  constructor (api: IAxiosInstance) {
    super(api)

    this.singularName = 'produto'
    this.pluralName = 'produtos'
  }

  async findBySupplierCode (
    code: string,
    supplierId: number,
    params: IProductInfos
  ) {
    return await this._getOne(String(supplierId), `produto/${code}`, params)
  }
}
