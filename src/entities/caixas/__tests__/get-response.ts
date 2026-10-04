import { IGetResponse } from '../interfaces/get.interface'

const getResponse: IGetResponse = {
  data: [
    {
      id: '1234567',
      debCred: 'D',
      situacao: 'R',
      valor: 100,
      data: '2025-01-01',
      observacoes: 'Observações do lançamento',
      descricao: 'Descrição do lançamento',
      origem: {
        id: 12345678,
        tipo: 'bordero'
      },
      contato: {
        id: 12345678,
        nome: 'Pedro Silva',
        cnpj: '30188025000121'
      },
      contaFinanceira: {
        id: 12345678,
        descricao: 'Conta Contábil'
      }
    }
  ]
}

export default getResponse
