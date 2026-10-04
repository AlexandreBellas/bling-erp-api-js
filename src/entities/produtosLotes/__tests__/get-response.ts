import { IGetResponse } from '../interfaces/get.interface'

const getResponse: IGetResponse = {
  data: [
    {
      idLote: 12345678,
      codigoLote: 'Lote 1',
      dataFabricacao: '2021-01-01',
      dataValidade: '2021-01-01',
      diasPermitidoVenda: 10,
      codigoAgregacao: '12345678',
      produto: {
        id: 12345678
      },
      deposito: {
        id: 12345678
      },
      status: 1
    }
  ]
}

export default getResponse
