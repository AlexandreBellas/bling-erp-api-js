export default {
  data: {
    id: 12345678
  }
}

export const updateRequestBody = {
  descricao: 'Dinheiro',
  tipoPagamento: 1 as const,
  situacao: 1 as const,
  padrao: 0 as const,
  condicao: '1x',
  destino: 1 as const,
  finalidade: 1 as const,
  taxas: {
    aliquota: 3.5,
    valor: 1.99,
    prazo: 2
  },
  dadosCartao: {
    bandeira: 1 as const,
    tipo: 1 as const,
    cnpjCredenciadora: '67168564000109'
  }
}
