import { IFindResponse } from '../interfaces/find.interface'

const findResponse: IFindResponse = {
  data: {
    id: 1,
    nome: 'Atributo 1',
    obrigatorio: true,
    tipo: 'string',
    unidadePadrao: 'unidade',
    minimo: 1,
    maximo: 10
  }
}

export default findResponse
