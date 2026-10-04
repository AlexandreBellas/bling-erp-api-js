export default {
  data: {
    id: 6423813145,
    descricao: 'Correios Cliente',
    tipoIntegracao: 'Correios' as const,
    integracaoNativa: false,
    situacao: 'H' as const,
    integracao: {
      id: 12345678
    },
    servicos: [
      {
        id: 6423813145,
        descricao: 'CARTA REG AR CONV B1 MFD',
        freteItem: 12.45,
        estimativaEntrega: 2,
        codigo: 'ABC1234',
        logistica: {
          id: 12345678
        },
        transportador: {
          id: 12345678
        },
        aliases: ['ALIAS1'],
        ativo: true
      }
    ]
  }
}
