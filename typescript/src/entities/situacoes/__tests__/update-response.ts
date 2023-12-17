export default {
  data: {
    id: 12345678
  }
}

export const updateRequestBody = {
  descricao: 'Alugel do apartamento A102',
  data: '2023-02-19',
  numero: '25',
  valor: 59.99,
  situacao: 1 as const,
  contato: {
    id: 12345678
  },
  dataFim: '2024-05',
  tipoManutencao: 1 as const,
  emitirOrdemServico: false,
  observacoes: '',
  vendedor: {
    id: 12345678,
    comissao: {
      aliquota: 0.5,
      numeroParcelas: 1
    }
  },
  categoria: {
    id: 12345678
  },
  desconto: {
    valor: 4.99,
    dataFim: '2023-02'
  },
  contaContabil: {
    id: 12345678
  },
  formaPagamento: {
    id: 12345678
  },
  notaFiscal: {
    mes: 2 as const,
    gerar: 1 as const,
    descontarImpostoRenda: 1 as const,
    texto: 'Exemplo de texto.',
    cfop: '5.556',
    iss: {
      descontar: false,
      aliquota: 2.5
    },
    item: {
      codigoServico: '14.13',
      produto: {
        id: 12345678
      }
    }
  },
  cobranca: {
    dataBase: '2023-02-22',
    contato: {
      id: 12345678
    },
    vencimento: {
      tipo: 1 as const,
      dia: 10,
      periodicidade: 1 as const
    }
  }
}
