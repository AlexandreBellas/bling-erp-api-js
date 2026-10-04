export default {
  data: {
    faturada: false,
    observacoes: 'Total aproximado de tributos: R$ [APROX_TRIB]. Fonte IBPT.',
    pisCofinsPresumido: false,
    somaImpostosTotal: false,
    somaIcmsTotal: false,
    aliquotaFunrural: 0,
    descontaFunrural: false,
    consumidorFinal: false,
    retImpostoRetido: false,
    retAliquotaIr: 0,
    retValorIr: 0,
    retAliquotaCsll: 0,
    retValorCsll: 0,
    descontoCondicional: false,
    baseComissao: 0,
    icms: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      porcentagemFcpDifal: 0,
      valorFcpDifal: 0,
      valorFcpEfetivo: 0,
      porcentagemFcp: 0,
      porcentagemFcpUfDestino: 0,
      modalidadeBaseCalculo: 0,
      valorPauta: 0,
      aliquotaPresumido: 0,
      porcentagemBaseCalculoUfDestino: 0,
      porcentagemIcmsUfDestino: 0,
      tipoPartilha: 0 as const,
      valorIcmsDesonerado: 0,
      motivoDesoneracaoIcms: 0 as const,
      baseDiferimento: 0,
      valorBaseDiferimento: 0,
      valorPresumido: 0,
      aliquotaPosicao: 0
    },
    valorPmc: 0,
    aliquotaValorAproxImpostos: 0,
    informacoesAdicionaisFisco: '',
    incluirFreteIpi: false,
    simples: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      baseDiferimento: 0,
      modalidadeBaseCalculo: 0,
      valorPauta: 0,
      valorImpostoSt: 0,
      valorBaseCalculoSt: 0,
      baseCalculoSt: 0,
      percentualAdicionadoSt: 0,
      modalidadeBaseCalculoSt: 0,
      valorPautaSt: 0,
      aliquotaSt: 0,
      aliquotaStRetido: 0,
      baseStRetido: 0,
      valorUnitarioBaseCstRetencao: 0,
      valorUnitarioIcmsStRetencao: 0,
      valorUnitarioIcmsSubstituto: 0
    },
    ipi: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      valorIpiFixoUnitario: 0,
      classeEnquadramentoIpi: '',
      codigoEnquadramentoIpi: 0,
      codigoSelo: '',
      codigoExTipi: 0
    },
    issqn: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      codigoListaServicos: '01.04',
      descontarIssTotalNota: false,
      reterIss: false
    },
    pis: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      valorPisFixo: 0
    },
    cofins: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      valorCofinsFixo: 0
    },
    icmsSt: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: '',
      percentualAdicionado: 0,
      modalidadeBaseCalculo: 0 as const,
      valorPauta: 0
    },
    pisSt: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: ''
    },
    cofinsSt: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: ''
    },
    ii: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: ''
    },
    codigoBeneficioFiscal: '',
    porcentagemFcp: 0,
    cfop: 0,
    simplesSt: {
      regraOperacao: {
        id: 12345678
      },
      tributacao: 1 as const,
      cst: '49',
      aliquota: 0,
      base: 0,
      valorBaseCalculo: 0,
      valorImposto: 0,
      observacoes: '',
      informacoesAdicionaisFisco: ''
    },
    ibsCbs: {
      regraOperacao: { id: 12345678 },
      cst: '000',
      classificacaoTributaria: '000001',
      valorBaseCalculo: 100
    },
    ibs: {
      regraOperacao: { id: 12345678 },
      percentualIbsUf: 0.1,
      percentualIbsMunicipio: 0.1,
      percentualReducaoAliquotaUf: 0,
      percentualReducaoAliquotaMunicipio: 0,
      aliquotaEfetivaUf: 0.1,
      aliquotaEfetivaMunicipio: 0.1,
      percentualDiferimentoUf: 0,
      percentualDiferimentoMunicipio: 0,
      codigoCreditoPresumido: '01',
      percentualCreditoPresumido: 0
    },
    cbs: {
      regraOperacao: { id: 12345678 },
      percentualCbs: 0.9,
      percentualReducaoAliquota: 0,
      aliquotaEfetiva: 0.9,
      percentualDiferimento: 0,
      codigoCreditoPresumido: '01',
      percentualCreditoPresumido: 0
    },
    ibsCbsReg: {
      cstRegular: '000',
      classificacaoTributariaRegular: '000001',
      aliquotaEfetivaRegularIbsUf: 0.1,
      aliquotaEfetivaRegularIbsMunicipio: 0.1,
      aliquotaEfetivaRegularCbs: 0.9,
      valorTributacaoRegularIbsUf: 0.1,
      valorTributacaoRegularIbsMunicipio: 0.1,
      valorTributacaoRegularCbs: 0.9
    }
  }
}

export const obtainTaxRequestBody = {
  tipoNota: 1 as const,
  uf: 'RS' as const,
  municipio: {
    id: 4302105
  },
  obterRegras: true,
  crt: 1 as const,
  loja: {
    id: 12345678,
    unidadeNegocio: {
      id: 12345678
    }
  },
  produto: {
    id: 12345678,
    valorUnitario: 0,
    cupomFiscal: 0,
    origem: 0 as const,
    quantidade: 0
  }
}
