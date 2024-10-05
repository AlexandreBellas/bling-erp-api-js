import ICRT from 'src/entities/@shared/types/crt.type'
import IOrigem from 'src/entities/@shared/types/origem.type'
import IUF from 'src/entities/@shared/types/uf.type'
import { IModalidadeBaseCalculoICMSST } from '../types/modalidade-base-calculo-icms-st.type'
import { IMotivoDesoneracaoICMS } from '../types/motivo-desoneracao-icms.type'
import { ITipoNota } from '../types/tipo-nota.type'
import { ITributacao } from '../types/tributacao.type'

export interface IObtainTaxParams {
  /**
   * ID da natureza de operação
   */
  idNaturezaOperacao: number
}

export interface IObtainTaxBody {
  tipoNota: ITipoNota
  uf: IUF
  municipio: { id: number }
  calcularImpostos?: boolean
  crt?: ICRT
  loja: {
    id: number
    unidadeNegocio?: { id: number }
  }
  produto: {
    id: number
    valorUnitario: number
    cupomFiscal: number
    origem: IOrigem
    quantidade: number
  }
}

export interface IObtainTaxResponse {
  data: {
    faturada?: boolean
    observacoes?: string
    pisCofinsPresumido?: boolean
    somaImpostosTotal?: boolean
    somaIcmsTotal?: boolean
    aliquotaFunrural?: number
    descontaFunrural?: boolean
    consumidorFinal?: boolean
    retImpostoRetido?: boolean
    retAliquotaIr?: number
    retValorIr?: number
    retAliquotaCsll?: number
    retValorCsll?: number
    descontoCondicional?: boolean
    baseComissao?: number
    icms?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      porcentagemFcpDifal?: number
      valorFcpDifal?: number
      valorFcpEfetivo?: number
      porcentagemFcp?: number
      porcentagemFcpUfDestino?: number
      modalidadeBaseCalculo?: number
      valorPauta?: number
      aliquotaPresumido?: number
      porcentagemBaseCalculoUfDestino?: number
      porcentagemIcmsUfDestino?: number
      tipoPartilha?: number
      valorIcmsDesonerado?: number
      motivoDesoneracaoIcms?: IMotivoDesoneracaoICMS
      baseDiferimento?: number
      valorBaseDiferimento?: number
      valorPresumido?: number
      aliquotaPosicao?: number
    }
    valorPmc?: number
    aliquotaValorAproxImpostos?: number
    informacoesAdicionaisFisco?: string
    incluirFreteIpi?: boolean
    simples?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      baseDiferimento?: number
      modalidadeBaseCalculo?: number
      valorPauta?: number
      valorImpostoSt?: number
      valorBaseCalculoSt?: number
      baseCalculoSt?: number
      percentualAdicionadoSt?: number
      modalidadeBaseCalculoSt?: number
      valorPautaSt?: number
      aliquotaSt?: number
      aliquotaStRetido?: number
      baseStRetido?: number
      valorUnitarioBaseCstRetencao?: number
      valorUnitarioIcmsStRetencao?: number
      valorUnitarioIcmsSubstituto?: number
    }
    ipi?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      valorIpiFixoUnitario?: number
      classeEnquadramentoIpi?: string
      codigoEnquadramentoIpi?: number
      codigoSelo?: string
      codigoExTipi?: number
    }
    issqn?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      codigoListaServicos?: string
      descontarIssTotalNota?: boolean
      reterIss?: boolean
    }
    pis?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      valorPisFixo?: number
    }
    cofins?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      valorCofinsFixo?: number
    }
    icmsSt?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
      percentualAdicionado?: number
      modalidadeBaseCalculo?: IModalidadeBaseCalculoICMSST
      valorPauta?: number
    }
    pisSt?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
    }
    cofinsSt?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
    }
    ii?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
    }
    codigoBeneficioFiscal?: string
    porcentagemFcp?: number
    cfop?: number
    simplesSt?: {
      regraOperacao?: { id: number }
      tributacao?: ITributacao
      cst?: string
      aliquota?: number
      base?: number
      valorBaseCalculo?: number
      valorImposto?: number
      observacoes?: string
      informacoesAdicionaisFisco?: string
    }
  }
}
