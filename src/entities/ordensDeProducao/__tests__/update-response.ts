export default null

export const updateRequestBody = {
  dataPrevisaoInicio: "2021-01-01",
  dataPrevisaoFinal: "2021-01-01",
  dataInicio: "2021-01-01",
  dataFim: "2021-01-01",
  numero: 12345678,
  responsavel: "Responsável pela ordem de produção",
  deposito: {
    idDestino: 12345678,
    idOrigem: 12345678
  },
  situacao: {
    id: 12345678
  },
  itens: [
    {
      produto: {
        id: 12345678
      },
      quantidade: 1
    }
  ],
  observacoes: "Observações"
}
