export default {
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
  ]
}

export const updateRequestBody = {
  descricao: 'Depósito Geral',
  situacao: 1 as const,
  padrao: false,
  desconsiderarSaldo: false
}
