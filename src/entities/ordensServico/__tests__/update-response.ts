import { IUpdateBody } from '../interfaces/update.interface'

export default null

export const updateRequestBody: IUpdateBody = {
  numero: '1024',
  data: '2026-01-10',
  dataPrevista: '2026-01-15',
  dataConclusao: '2026-01-14',
  dataSaida: '2026-01-16',
  horaInicio: '08:00:00',
  horaFim: '17:00:00',
  equipamento: 'Notebook Dell Inspiron',
  numeroSerieEquipamento: 'SN-99887766',
  descricaoProblema: 'Equipamento não liga',
  observacoes: 'Observações do recebimento',
  observacoesServico: 'Observações do serviço',
  observacoesInternas: 'Observações internas',
  garantia: 'Garantia de 90 dias sobre a peça substituída',
  diasGarantia: 90,
  desconto: {
    valor: 15.45,
    unidade: 'REAL'
  },
  valorFrete: 25,
  totalPecas: 100,
  totalServicos: 150,
  total: 275,
  orcar: false,
  orcado: false,
  tecnico: 'João da Silva',
  tecnicos: [12345678],
  loja: {
    id: 12345678,
    unidadeNegocio: {
      id: 12345678
    }
  },
  contato: {
    id: 12345678
  },
  vendedor: {
    id: 12345678
  },
  categoria: {
    id: 12345678
  },
  servicos: [
    {
      produto: {
        id: 12345678,
        nome: 'Troca de tela',
        codigo: 'SRV-001'
      },
      horas: 1.5,
      valorUnitario: 100,
      valorTotal: 150,
      precoLista: 120,
      desconto: 10,
      orcar: false,
      concluido: false
    }
  ],
  pecas: [
    {
      produto: {
        id: 12345678,
        nome: 'Troca de tela',
        codigo: 'SRV-001'
      },
      quantidade: 2,
      unidade: 'UN',
      valorUnitario: 50,
      precoLista: 60,
      desconto: 5
    }
  ],
  parcelas: [
    {
      dataVencimento: '2026-01-31',
      valor: 150,
      observacoes: 'Parcela única',
      formaPagamento: {
        id: 12345678
      }
    }
  ]
}
