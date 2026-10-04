import { IGetBalancesResponse } from '../interfaces/get-balances.interface'

const getBalancesResponse: IGetBalancesResponse = {
  data: [
    {
      idLote: 12345678,
      produto: {
        id: 12345678
      },
      deposito: {
        id: 12345678
      },
      saldoAtual: 12345678.12
    }
  ]
}

export default getBalancesResponse
