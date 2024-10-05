export default {
  id: 12345678,
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
    id: 12345678,
    valor: 1,
    nome: "Em aberto"
  },
  vendas: [
    {
      numero: 12345678,
      contato: {
        id: 12345678,
        nome: "João da Silva"
      }
    }
  ],
  itens: [
    {
      produto: {
        id: 12345678,
        nome: "Nome do produto",
        codigo: "Código do produto"
      },
      quantidade: 1
    }
  ],
  observacoes: "Observações"
}
