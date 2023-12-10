export default {
  data: [
    {
      id: 12345678
    }
  ]
}

export const createRequestBody = {
  logistica: {
    id: 12345678
  },
  servicos: [
    {
      descricao: 'CARTA REG AR CONV B1 MFD',
      codigo: 'ABC1234',
      aliases: ['ALIAS1'],
      ativo: true,
      freteItem: 12.45,
      estimativaEntrega: 2,
      idCodigoServico: '13112',
      transportador: {
        id: 12345678
      }
    }
  ]
}
