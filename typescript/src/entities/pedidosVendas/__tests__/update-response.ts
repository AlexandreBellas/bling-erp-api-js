export default {
  data: {
    id: 12345678,
    alertas: [
      {
        code: 49,
        msg: 'Uma ou mais parcelas da venda possuem erros de validação',
        element: 'parcelas',
        namespace: 'VENDAS',
        collection: [
          {
            index: 1,
            code: 12,
            msg: 'Id da forma de pagamento inválido.',
            element: 'formaPagamento',
            namespace: 'VENDAS'
          }
        ]
      }
    ],
    rastreamento: {}
  }
}

export const updateRequestBody = {
  numero: 123,
  numeroLoja: 'Loja_123',
  data: '2023-01-12',
  dataSaida: '2023-01-12',
  dataPrevista: '2023-01-12',
  contato: {
    id: 12345678,
    tipoPessoa: 'J' as const,
    numeroDocumento: '30188025000121'
  },
  loja: {
    id: 12345678
  },
  numeroPedidoCompra: '123',
  outrasDespesas: 2,
  observacoes: 'Observações do pedido.',
  observacoesInternas: 'Observações internas do pedido.',
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
  itens: [
    {
      id: 12345678,
      codigo: 'BLG-5',
      unidade: 'UN',
      quantidade: 1,
      desconto: 2,
      valor: 4.9,
      aliquotaIPI: 0,
      descricao: 'Produto do Bling',
      descricaoDetalhada: 'Brinde',
      produto: {
        id: 12345678
      },
      comissao: {
        base: 10,
        aliquota: 2,
        valor: 0.2
      }
    }
  ],
  parcelas: [
    {
      id: 12345678,
      dataVencimento: '2023-01-12',
      valor: 123.45,
      observacoes: 'Observação da parcela',
      formaPagamento: {
        id: 12345678
      }
    }
  ],
  transporte: {
    fretePorConta: 0 as const,
    frete: 20,
    quantidadeVolumes: 1,
    pesoBruto: 0.5,
    prazoEntrega: 10,
    contato: {
      id: 12345678,
      nome: 'Transportador'
    },
    etiqueta: {
      nome: 'Transportador',
      endereco: 'Olavo Bilac',
      numero: '914',
      complemento: 'Sala 101',
      municipio: 'Bento Gonçalves',
      uf: 'RS' as const,
      cep: '95702-000',
      bairro: 'Imigrante',
      nomePais: 'BRASIL'
    },
    volumes: [
      {
        id: 12345678,
        servico: 'ALIAS_123',
        codigoRastreamento: 'COD123BR'
      }
    ]
  },
  vendedor: {
    id: 12345678
  },
  intermediador: {
    cnpj: '13921649000197',
    nomeUsuario: 'usuario'
  },
  taxas: {
    taxaComissao: 1,
    custoFrete: 9.99,
    valorBase: 129.9
  }
}
