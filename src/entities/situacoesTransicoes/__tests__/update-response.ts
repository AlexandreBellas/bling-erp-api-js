export default {
  data: {
    id: 12345678
  }
}

export const updateRequestBody = {
  ativo: true,
  acoes: [12, 15],
  modulo: {
    id: 12345678
  },
  situacaoOrigem: {
    id: 9,
    nome: 'Em aberto'
  },
  situacaoDestino: {
    id: 9,
    nome: 'Em aberto'
  }
}
