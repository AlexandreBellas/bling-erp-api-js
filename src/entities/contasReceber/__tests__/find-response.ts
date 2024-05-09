export default {
  data: {
    id: 12345678,
    situacao: 1 as const,
    vencimento: '2023-01-12',
    valor: 1500.75,
    idTransacao: 'vX98D',
    linkQRCodePix: 'doc.view.php?id=9ab1671b3f05765cb49fee83ee0f2496',
    linkBoleto: 'doc.view.php?id=9ab1671b3f05765cb49fee83ee0f2496',
    dataEmissao: '2023-01-12',
    contato: {
      id: 12345678,
      nome: 'Contato Teste',
      numeroDocumento: '12345678910',
      tipo: 'F'
    },
    formaPagamento: {
      id: 12345678,
      codigoFiscal: 15 as const
    },
    contaContabil: {
      id: 12345678,
      descricao: 'Contas a pagar'
    },
    origem: {
      id: 12345678,
      tipoOrigem: 'venda',
      numero: '0921132',
      dataEmissao: '2023-07-05',
      valor: 45.76,
      situacao: 1 as const,
      url: 'doc.view.php?id=9ab1671b3f05765cb49fee83ee0f2496'
    },
    saldo: 100.75,
    vencimentoOriginal: '2023-01-12',
    numeroDocumento: '',
    competencia: '2023-01-12',
    historico: '',
    numeroBanco: '',
    portador: {
      id: 12345678
    },
    categoria: {
      id: 12345678
    },
    vendedor: {
      id: 12345678
    },
    borderos: [0],
    ocorrencia: {
      tipo: 1 as const
    }
  }
}
