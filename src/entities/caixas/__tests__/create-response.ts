import { ICreateBody, ICreateResponse } from '../interfaces/create.interface'

const createResponse: ICreateResponse = {
  id: 12345678
}

export default createResponse

export const createRequestBody: ICreateBody = {
  id: 12345678,
  data: '2025-01-01',
  valor: 123,
  debCred: 'C',
  competencia: '2025-01-01',
  observacoes: 'Lançamento atualizado',
  contaFinanceira: {
    id: 12345678
  },
  categoria: {
    id: 12345678
  },
  origem: {
    id: 12345678
  },
  contato: {
    id: 12345678
  }
}
