import { IUpdateBody, IUpdateResponse } from '../interfaces/update.interface'

export const updateRequestBody: IUpdateBody = {
  descricao: 'Receitas operacionais',
  tipo: 2,
  idCategoriaPai: 0,
  grupoDRE: 2
}

const updateResponse: IUpdateResponse = {
  data: {
    id: 12345678,
    idCategoriaPai: 0,
    descricao: 'Receitas operacionais',
    tipo: 2
  }
}

export default updateResponse
