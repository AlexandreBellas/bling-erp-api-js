export default {
  data: {
    id: 12345678,
    nome: 'Copo do Bling',
    preco: 32.56,
    codigo: 'COD-4587'
  },
  headers: {
    'x-bling-homologacao': '123'
  }
}

export const createRequestBody = {
  nome: 'Copo do Bling',
  preco: 32.56,
  codigo: 'COD-4587',
  headers: {
    'x-bling-homologacao': '123'
  }
}
