import { IGetResponse } from '../interfaces/get.interface'

const getResponse: IGetResponse = {
  data: [
    {
      id: 12345678,
      numero: '1024',
      data: '2026-01-10',
      dataPrevista: '2026-01-15',
      total: 275,
      observacoesInternas: 'Observações internas',
      contato: {
        id: 12345678,
        nome: 'Pedro Silva'
      },
      vendedor: {
        id: 12345678
      },
      situacao: {
        id: 12345678,
        valor: 0,
        nome: 'Em aberto'
      }
    }
  ]
}

export default getResponse
