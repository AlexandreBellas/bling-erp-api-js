import { IApiInstance } from '../core/interfaces/method'

import Delete from '../core/functions/delete'

export interface IBorderoResponse {
  id: string
  mensagem: string
}

export default function Borderos (api: IApiInstance) {
  const config = {
    api,
    singularName: 'bordero',
    pluralName: 'borderos'
  }

  return Object.assign(config, {
    delete: new Delete<IBorderoResponse>().delete
  })
}
