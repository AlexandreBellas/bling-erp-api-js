import { IUpdateBody, IUpdateResponse } from '../interfaces/update.interface'

const updateResponse: IUpdateResponse = {
  id: 12345678
}

export default updateResponse

export const updateRequestBody: IUpdateBody = {
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
