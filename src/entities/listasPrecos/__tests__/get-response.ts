import { IGetResponse } from '../interfaces/get.interface'

const getResponse: IGetResponse = {
  data: [
    {
      id: 12345678,
      nome: 'Lista atacado',
      tipo: 1,
      categoria: 2,
      fator: {
        tipo: 1,
        valor: 10.5
      },
      vinculos: [12345678, 87654321],
      dataInicio: '2026-01-01 00:00:00',
      dataFim: '2026-12-31 23:59:59'
    }
  ]
}

export default getResponse
