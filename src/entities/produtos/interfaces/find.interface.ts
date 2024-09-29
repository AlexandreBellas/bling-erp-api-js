import { IActionEstoque } from '../types/action-estoque.type'
import { ICondicao } from '../types/condicao.type'
import { IEstruturaLancamentoEstoque } from '../types/estrutura-lancamento-estoque.type'
import { IEstruturaTipoEstoque } from '../types/estrutura-tipo-estoque.type'
import { IFormato } from '../types/formato.type'
import { ISituacao } from '../types/situacao.type'
import { ITipoArmamento } from '../types/tipo-armamento.type'
import { ITipoProducao } from '../types/tipo-producao.type'
import { ITipo } from '../types/tipo.type'

export interface IFindParams {
  /**
   * ID do produto
   */
  idProduto: number
}

export interface IFindResponse {
  data: {
    id?: number
    nome: string
    codigo?: string
    preco?: number
    tipo: ITipo
    situacao: ISituacao
    formato: IFormato
    descricaoCurta?: string
    imagemURL?: string
    dataValidade?: string
    unidade?: string
    pesoLiquido?: number
    pesoBruto?: number
    volumes?: number
    itensPorCaixa?: number
    gtin?: string
    gtinEmbalagem?: string
    tipoProducao?: ITipoProducao
    condicao?: ICondicao
    freteGratis?: boolean
    marca?: string
    descricaoComplementar?: string
    linkExterno?: string
    observacoes?: string
    categoria?: { id: number }
    estoque?: {
      minimo?: number
      maximo?: number
      crossdocking?: number
      localizacao?: string
      saldoVirtualTotal?: number
    }
    fornecedor?: {
      id?: number
      contato?: {
        id?: number
        nome?: string
      }
      codigo?: string
      precoCusto?: number
      precoCompra?: number
    }
    actionEstoque?: IActionEstoque
    dimensoes?: {
      largura?: number
      altura?: number
      profundidade?: number
      unidadeMedida?: number
    }
    tributacao?: {
      origem?: number
      nFCI?: string
      ncm?: string
      cest?: string
      codigoListaServicos?: string
      spedTipoItem?: string
      codigoItem?: string
      percentualTributos?: number
      valorBaseStRetencao?: number
      valorStRetencao?: number
      valorICMSSubstituto?: number
      codigoExcecaoTipi?: string
      classeEnquadramentoIpi?: string
      valorIpiFixo?: number
      codigoSeloIpi?: string
      valorPisFixo?: number
      valorCofinsFixo?: number
      codigoANP?: string
      descricaoANP?: string
      percentualGLP?: number
      percentualGasNacional?: number
      percentualGasImportado?: number
      valorPartida?: number
      tipoArmamento?: ITipoArmamento
      descricaoCompletaArmamento?: string
      dadosAdicionais?: string
      grupoProduto?: { id: number }
    }
    midia?: {
      video: { url: string }
      imagens: {
        externas?: { link: string }[]
        internas?: {
          linkMiniatura: string
          validade: string
          ordem: number
          anexo: { id: number }
          anexoVinculo: { id: number }
        }[]
      }
    }
    linhaProduto?: { id: number }
    estrutura?: {
      tipoEstoque: IEstruturaTipoEstoque
      lancamentoEstoque: IEstruturaLancamentoEstoque
      componentes: {
        produto: { id: number }
        quantidade: number
      }[]
    }
    camposCustomizados?: {
      idCampoCustomizado: number
      idVinculo?: number
      valor?: string
      item?: string
    }[]
    variacoes: {
      id?: number
      idProdutoPai?: number
      nome: string
      codigo?: string
      preco?: number
      tipo: ITipo
      situacao: ISituacao
      formato: IFormato
      descricaoCurta?: string
      dataValidade?: string
      unidade?: string
      pesoLiquido?: number
      pesoBruto?: number
      volumes?: number
      itensPorCaixa?: number
      gtin?: string
      gtinEmbalagem?: string
      tipoProducao?: ITipoProducao
      condicao?: ICondicao
      freteGratis?: boolean
      marca?: string
      descricaoComplementar?: string
      linkExterno?: string
      observacoes?: string
      categoria?: { id: number }
      estoque?: {
        minimo?: number
        maximo?: number
        crossdocking?: number
        localizacao?: string
        saldoVirtualTotal?: number
      }
      fornecedor?: {
        id?: number
        contato?: {
          id?: number
          nome?: string
        }
        codigo?: string
        precoCusto?: number
        precoCompra?: number
      }
      actionEstoque?: IActionEstoque
      dimensoes?: {
        largura?: number
        altura?: number
        profundidade?: number
        unidadeMedida?: number
      }
      tributacao?: {
        origem?: number
        nFCI?: string
        ncm?: string
        cest?: string
        codigoListaServicos?: string
        spedTipoItem?: string
        codigoItem?: string
        percentualTributos?: number
        valorBaseStRetencao?: number
        valorStRetencao?: number
        valorICMSSubstituto?: number
        codigoExcecaoTipi?: string
        classeEnquadramentoIpi?: string
        valorIpiFixo?: number
        codigoSeloIpi?: string
        valorPisFixo?: number
        valorCofinsFixo?: number
        codigoANP?: string
        descricaoANP?: string
        percentualGLP?: number
        percentualGasNacional?: number
        percentualGasImportado?: number
        valorPartida?: number
        tipoArmamento?: ITipoArmamento
        descricaoCompletaArmamento?: string
        dadosAdicionais?: string
        grupoProduto?: { id: number }
      }
      midia?: {
        video: { url: string }
        imagens: { externas: { link: string }[] }
      }
      linhaProduto?: { id: number }
      estrutura?: {
        tipoEstoque: IEstruturaTipoEstoque
        lancamentoEstoque: IEstruturaLancamentoEstoque
        componentes: {
          produto: { id: number }
          quantidade: number
        }[]
      }
      camposCustomizados?: {
        idCampoCustomizado: number
        idVinculo?: number
        valor?: string
        item?: string
      }[]
      variacao: {
        nome: string
        ordem: number
        produtoPai: {
          id?: number
          cloneInfo: boolean
        }
      }
    }[]
  }
}
