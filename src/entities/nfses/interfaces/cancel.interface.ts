import { ICancelarCodigoMotivo } from "../types/cancelar-codigo-motivo.type"

export interface ICancelParams {
  /**
   * ID da nota de serviço
   */
  idNotaServico: number
}

export interface ICancelBody {
  codigoMotivo?: ICancelarCodigoMotivo
  justificativa?: string
}
