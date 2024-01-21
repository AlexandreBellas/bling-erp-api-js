import ICRT from 'src/entities/@shared/types/crt.type'
import IUF from 'src/entities/@shared/types/uf.type'

export interface IGetParams {
  /**
   * Apenas ano ou ano e mês em que a empresa foi notificada. Caso não informado, será utilizado o ano atual.
   */
  periodo?: string
}

export interface IGetResponse {
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
