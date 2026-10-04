import { IGetBalanceSumResponse } from '../interfaces/get-balance-sum.interface'

const getBalanceSumResponse: IGetBalanceSumResponse = {
  data: [
    {
      produto: {
        id: 12345678
      },
      deposito: {
        id: 12345678
      },
      saldoTotal: 12345678.12
    }
  ]
}

export default getBalanceSumResponse
