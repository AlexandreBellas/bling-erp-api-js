export default {
  data: {
    id: 12345678
  }
}

export const createRequestBody = {
  produto: {
    id: 12345678
  },
  deposito: {
    id: 12345678
  },
  operacao: 'B' as const,
  preco: 1500.75,
  custo: 1500.75,
  quantidade: 50.75,
  observacoes: 'Observações de estoque'
}
