export interface IUpdateConfigurationsBody {
  basicas?: {
    emissorPadrao?: number
    naturezaOperacao?: number
  }
  ISS?: {
    zerar?: boolean
    reter?: boolean
    descontar?: boolean
    tributos: {
      id?: number
      percentualISS?: number
      CNAE: string
      descricaoServico: string
      padrao?: boolean
      codigo: {
        listaServico: string
        tributacao?: string
      }
    }[]
  }
  controle?: {
    numeracaoRPS?: {
      cnpjEmitente?: string
      id?: number
      numero?: number
      serie?: number
    }
  }
  impostos?: {
    bloquearRetencaoPessoaFisica?: boolean
    IR?: {
      percentual?: number
      valorMinimoAlternativoDescontol?: number
      descontar?: boolean
      texto?: {
        padrao?: string
        isento?: string
      }
    }
    outros?: {
      CSLLPISCOFINSDTO?: {
        calcular?: boolean
        reter?: boolean
      }
      INSS?: {
        reter?: boolean
      }
      aproximados?: {
        utilizarAliqIBPT?: boolean
        percentualAliq?: number
      }
    }
  }
  envioEmail?: {
    enviarBoletoRPS?: boolean
    remetente?: string
    assunto?: string
    mensagem?: string
    padrao?: {
      copia?: string
      resposta?: string
    }
  }
  adicionais?: {
    CFPS?: string
    CFOP?: string
    AEDF?: string
    proximoNumeroLote?: number
    observacaoImpressaNota?: string
    descricaoComplementar?: string
    tipoEmissao?: string
    campoNumeroDocContas?: boolean
    incentivadorFiscal?: boolean
    alterarSituacao?: boolean
    incluirParcelas?: boolean
    considerarDataParcela?: boolean
    considerarDataOrdemServico?: boolean
    cadastroPrefeitura?: {
      login?: string
      senha?: string
    }
  }
}
