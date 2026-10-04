import { ICreateBody, ICreateResponse } from '../interfaces/create.interface'

export const createRequestBody: ICreateBody = {
  descricao: 'Receitas operacionais',
  tipo: 2,
  idCategoriaPai: 0,
  grupoDRE: 2
}

const createResponse: ICreateResponse = {
  data: {
    id: 12345678,
    idCategoriaPai: 0,
    descricao: 'Receitas operacionais',
    tipo: 2
  }
}

export default createResponse
