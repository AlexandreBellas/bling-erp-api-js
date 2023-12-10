export default {
  basicas: {
    emissorPadrao: 3,
    naturezaOperacao: 1
  },
  ISS: {
    zerar: false,
    reter: true,
    descontar: true,
    tributos: [
      {
        id: 1,
        percentualISS: 5,
        CNAE: '82.99',
        descricaoServico: 'Laudo de Vistoria Veicular',
        padrao: false,
        codigo: {
          listaServico: '0107',
          tributacao: '0107'
        }
      }
    ]
  },
  controle: {
    numeracaoRPS: {
      cnpjEmitente: '48.426.683/0001-70',
      id: 1,
      numero: 1,
      serie: 1
    }
  },
  impostos: {
    bloquearRetencaoPessoaFisica: true,
    IR: {
      percentual: 0,
      valorMinimoAlternativoDescontol: 0,
      descontar: false,
      texto: {
        padrao: '( - ) IRenda Fonte 1,5%',
        isento: 'IR Isento Cfe. Lei nro. 9430/96 Art.64'
      }
    },
    outros: {
      CSLLPISCOFINSDTO: {
        calcular: true,
        reter: false
      },
      INSS: {
        reter: true
      },
      aproximados: {
        utilizarAliqIBPT: true,
        percentualAliq: 0
      }
    }
  },
  envioEmail: {
    enviarBoletoRPS: true,
    remetente: 'Nome remetente padrão',
    assunto: 'Assunto padrão',
    mensagem: 'Mensagem padrão e-mail',
    padrao: {
      copia: 'E-mail padrão de cópia',
      resposta: 'E-mail padrão de resposta'
    }
  },
  adicionais: {
    CFPS: '9.001',
    CFOP: '1.250',
    AEDF: '',
    proximoNumeroLote: 78,
    observacaoImpressaNota: 'OBS',
    descricaoComplementar: 'OBS',
    tipoEmissao: 'R',
    campoNumeroDocContas: true,
    incentivadorFiscal: true,
    alterarSituacao: true,
    incluirParcelas: false,
    considerarDataParcela: true,
    considerarDataOrdemServico: true,
    cadastroPrefeitura: {
      login: 'Login prefeitura',
      senha: 'Senha prefeitura'
    }
  }
}
