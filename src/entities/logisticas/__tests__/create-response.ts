export default {
  data: {
    id: 12345678
  }
}

export const createRequestBody = {
  descricao: 'Correios Cliente',
  situacao: 'H' as const,
  servicos: [
    {
      descricao: 'CARTA REG AR CONV B1 MFD',
      freteItem: 12.45,
      estimativaEntrega: 2,
      codigo: 'ABC1234',
      transportador: { id: 12345678 },
      aliases: ['ALIAS1']
    }
  ]
}
