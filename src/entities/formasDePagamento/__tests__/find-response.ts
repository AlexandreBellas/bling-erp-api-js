export default {
  data: {
    id: 12345678,
    descricao: 'Dinheiro',
    tipoPagamento: 1 as const,
    situacao: 1 as const,
    fixa: false,
    padrao: 0 as const,
    condicao: '1x',
    destino: 1 as const,
    finalidade: 1 as const,
    juros: 1.5,
    multa: 2,
    utilizaDiasUteis: true,
    taxas: {
      aliquota: 3.5,
      valor: 1.99,
      prazo: 2
    },
    dadosCartao: {
      bandeira: 1 as const,
      tipo: 1 as const,
      cnpjCredenciadora: '67168564000109',
      autoLiquidacao: 1 as const
    }
  }
}
