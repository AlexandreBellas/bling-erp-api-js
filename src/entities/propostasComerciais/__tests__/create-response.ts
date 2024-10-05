export default {
  data: {
    id: 12345678
  }
}

export const createRequestBody = {
  data: "2024-04-29",
  situacao: "Concluído",
  numero: 13,
  contato: {
    id: 12345678
  },
  loja: {
    id: 12345678
  },
  desconto: 10,
  outrasDespesas: 11,
  garantia: 3,
  dataProximoContato: "2024-05-01",
  observacoes: "Observações da proposta comercial",
  observacaoInterna: "Observações internas da proposta comercial",
  totalOutrosItens: 1,
  aosCuidadosDe: "Nome do Contato",
  introducao: "Introdução da proposta comercial",
  prazoEntrega: "Prazo de entrega proposta comercial",
  itens: [
    {
      produto: {
        id: 12345678,
        descricao: "Bolo"
      },
      codigo: "BLG-5",
      unidade: "UN",
      quantidade: 1.1,
      desconto: 1.2,
      valor: 3.1,
      descricaoDetalhada: "Descrição detalhada do produto"
    }
  ],
  parcelas: [
    {
      numeroDias: 10,
      dataVencimento: "2024-04-29",
      valor: 10.55,
      observacoes: "Observacao da forma de pagamento",
      formaPagamento: [
        {
          id: 12345678
        }
      ]
    }
  ],
  vendedor: {
    id: 12345678
  },
  transporte: {
    freteModalidade: 0 as const,
    frete: 2.34,
    quantidadeVolumes: 2.33,
    prazoEntrega: 2,
    pesoBruto: 2.4,
    contato: {
      id: 12345678,
      nome: "Nome do transportador"
    },
    volumes: {}
  }
}
