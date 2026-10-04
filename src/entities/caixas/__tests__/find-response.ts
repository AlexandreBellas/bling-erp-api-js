import { IFindResponse } from '../interfaces/find.interface'

const findResponse: IFindResponse = {
  id: 12345678,
  debCred: 'D',
  saldo: 'S',
  situacao: 'R',
  tipoLancamento: '1',
  data: '2025-01-01',
  competencia: '2025-01-01',
  valor: 100,
  observacoes: 'Observações',
  parcela: {
    id: 12345678
  },
  categoria: {
    id: 12345678,
    descricao: 'Vendas'
  },
  conciliacaoMovimentacao: {
    id: 12345678
  },
  contato: {
    id: 12345678,
    nome: 'Pedro Silva',
    cnpj: '30188025000121'
  },
  origem: {
    id: 12345678,
    tipo: 'bordero'
  },
  contaFinanceira: {
    id: 12345678,
    descricao: 'Conta Contábil'
  },
  transferencia: 'S'
}

export default findResponse
