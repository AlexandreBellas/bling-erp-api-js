import ICRT from 'src/entities/@shared/types/crt.type'
import IUF from 'src/entities/@shared/types/uf.type'

export interface ICreateParams {
  /**
   * ULID da notificação.
   */
  idNotificacao: string
}

export interface ICreateResponse {
  data: {
    id?: string
    emitente: string
    modulo: string
    descricao: string
    titulo: string
    fonte?: string
    linkAjuda?: string
    dataCriacao?: string
    dataEnvio: string
    dataVigencia?: string
    dataAcao?: string
    dataLeitura?: string
    dataAlerta?: string
    dataPerigo?: string
    enquadramentos?: {
      tamanhoEmpresa?: string[]
      idMunicipio?: string[]
      uf?: IUF[]
      crt?: ICRT[]
    }[]
  }[]
}
