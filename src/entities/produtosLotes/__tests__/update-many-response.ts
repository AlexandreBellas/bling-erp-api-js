import {
  IUpdateManyBody,
  IUpdateManyResponse
} from '../interfaces/update-many.interface'

const updateManyResponse: IUpdateManyResponse = {
  data: {
    saved: [
      {
        id: 12345678,
        codigoLote: 'Lote 1',
        idProduto: 12345678
      }
    ],
    errors: [
      {
        error: {
          type: 'VALIDATION_ERROR' as const,
          message: 'Não foi possível salvar a venda',
          description:
            'A venda não pode ser salva, pois ocorreram problemas em sua validação.',
          fields: [
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
      }
    ]
  }
}

export default updateManyResponse

export const updateManyRequestBody: IUpdateManyBody = [
  {
    idLote: 12345678,
    codigoLote: 'Lote 1',
    dataFabricacao: '2021-01-01',
    dataValidade: '2021-01-01',
    diasPermitidoVenda: 10,
    codigoAgregacao: '12345678',
    produto: {
      id: 12345678
    },
    deposito: {
      id: 12345678
    }
  }
]
