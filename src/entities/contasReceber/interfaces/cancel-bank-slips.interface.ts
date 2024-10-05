import { ITipoAutenticacao } from "../types/tipo-autenticacao.type"

export interface ICancelBankSlipsBody {
  autenticacao?: {
    tipo: ITipoAutenticacao
    codigo: string
  },
  origem?: {
    id: number
  },
  conta?: {
    id: number
  },
  motivo: string
}
