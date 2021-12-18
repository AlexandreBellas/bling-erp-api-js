import { IApiInstance } from '../core/interfaces/method'

import Find from '../core/functions/find'

export interface ICustomizedFieldResponse {
  id: string
  alias: string
  nome: string
  descricao: string
  situacao: boolean
  tipoCampo: string
  obrigatorio: boolean
  tamanhoMinimo?: string
  tamanhoMaximo?: string
  agrupadores: {
    agrupador: {
      id: string
      nome: string
    }
  }[]
}

export default async function CustomizedField (api: IApiInstance) {
  const config = {
    api,
    singularName: 'campocustomizado',
    pluralName: 'camposcustomizados'
  }

  const find = async (
    id: 'Produtos' | 'OrdemServico' | 'Contatos',
    options?: {
      raw?: boolean
    }
  ) => {
    const findMethod = new Find<
      ICustomizedFieldResponse,
      Record<string, never>
    >(config)

    if (options && options.raw) {
      return await findMethod.find(id, { raw: true })
    } else {
      return await findMethod.find(id, { raw: false })
    }
  }

  return Object.assign(config, { find })
}
