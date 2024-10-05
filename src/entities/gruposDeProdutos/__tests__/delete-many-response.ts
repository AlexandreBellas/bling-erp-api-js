export default {
  data: {
    alertas: [
      {
        error: {
          type: "VALIDATION_ERROR",
          message: "Não foi possível salvar a venda",
          description: "A venda não pode ser salva, pois ocorreram problemas em sua validação.",
          fields: [
            {
              code: 49,
              msg: "Uma ou mais parcelas da venda possuem erros de validação",
              element: "parcelas",
              namespace: "VENDAS",
              collection: [
                {
                  index: 1,
                  code: 12,
                  msg: "Id da forma de pagamento inválido.",
                  element: "formaPagamento",
                  namespace: "VENDAS"
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
