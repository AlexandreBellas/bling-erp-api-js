export default {
  data: {
    id: 12345678
  }
}

export const createRequestBody = {
  descricao: 'Depósito Geral',
  situacao: 1 as const,
  padrao: false,
  desconsiderarSaldo: false
}
