import { ICreateBody, ICreateResponse } from '../interfaces/create.interface'

const createResponse: ICreateResponse = {
  data: {
    id: 12345678,
    idLote: 12345678,
    quantidade: 12345678,
    tipoLancamento: 1,
    data: '2021-01-01 00:00:00',
    idOrigem: 12345678,
    observacao: 'Observação do lote'
  }
}

export default createResponse

export const createRequestBody: ICreateBody = {
  quantidade: 12345678,
  tipoLancamento: 1,
  observacao: 'Observação do lote'
}
