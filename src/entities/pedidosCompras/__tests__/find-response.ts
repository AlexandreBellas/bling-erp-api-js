export default {
  data: {
    id: 12345678,
    numero: 12,
    data: '2020-08-24',
    dataPrevista: '2020-08-30',
    totalProdutos: 2090.66,
    total: 2090.66,
    fornecedor: {
      id: 12345678
    },
    situacao: {
      valor: 0 as const
    },
    ordemCompra: '351635',
    observacoes: 'Observação sobre o pedido.',
    observacoesInternas: 'Observação interna sobre o pedido.',
    desconto: {
      valor: 15.45,
      unidade: 'REAL' as const
    },
    categoria: {
      id: 12345678
    },
    tributacao: {
      totalICMS: 5.55,
      totalIPI: 5.55
    },
    transporte: {
      frete: 15.78,
      transportador: 'Zé Transportes',
      fretePorConta: 0,
      pesoBruto: 15.78,
      volumes: 11
    },
    itens: [
      {
        descricao: 'Copo do Bling',
        codigoFornecedor: '46546546',
        unidade: 'Un',
        valor: 149.99,
        quantidade: 12,
        aliquotaIPI: 15.85,
        descricaoDetalhada: 'Descrição do item do pedido.',
        produto: {
          id: 12345678,
          codigo: 'CODE123'
        }
      }
    ],
    parcelas: [
      {
        valor: 2090.66,
        dataVencimento: '2020-09-23',
        observacao: 'Observação da parcela.',
        formaPagamento: {
          id: 12345678
        }
      }
    ]
  }
}
