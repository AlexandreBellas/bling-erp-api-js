import IUF from 'src/entities/@shared/types/uf.type'
import { ICriterio } from '../types/criterio.type'
import { ISituacao } from '../types/situacao.type'

export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
  /**
   * Nome, CPF/CNPJ, fantasia, e-mail ou código do contato
   */
  pesquisa?: string
  /**
   * Criterio de listagem
   */
  criterio?: ICriterio
  /**
   * ID do tipo do contato
   */
  idTipoContato?: number
  /**
   * ID do vendedor relacionado ao contato
   */
  idVendedor?: number
  /**
   * UF do contato
   */
  uf?: IUF
  /**
   * Telefone do contato
   */
  telefone?: string
  /**
   * IDs dos contatos
   */
  idsContatos?: number[]
  /**
   * CPF/CNPJ, desconsiderando a pontuação
   */
  numeroDocumento?: string
}

export interface IGetResponse {
  data: {
    id: number
    nome: string
    codigo: string
    situacao: ISituacao
    numeroDocumento: string
    telefone: string
    celular: string
  }[]
}
