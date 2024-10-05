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
      tipoPartilha: 0,
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
    }
  }
}

export const obtainTaxRequestBody = {
  tipoNota: 1 as const,
  uf: 'RS' as const,
  municipio: {
    id: 4302105
  },
  calcularImpostos: true,
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
