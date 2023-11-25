import ISituacao from 'src/entities/@shared/types/situacao.type'

export interface ICreateBody {
  descricao: string
  situacao: ISituacao
  padrao: boolean
  desconsiderarSaldo: boolean
}

export interface ICreateResponse {
  data: { id: number }
}
