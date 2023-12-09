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
   * Nome do contato do vendedor
   */
  nomeContato?: string
  /**
   * Situação do contato do vendedor
   */
  situacaoContato?: ISituacao
  /**
   * ID do contato do vendedor
   */
  idContato?: number
  /**
   * ID da loja vinculada ao vendedor
   */
  idLoja?: number
  /**
   * Data de alteração inicial
   */
  dataAlteracaoInicial?: Date | string
  /**
   * Data de alteração final
   */
  dataAlteracaoFinal?: Date | string
}

export interface IGetResponse {
  data: {
    id?: number
    descontoLimite?: number
    loja?: { id: number }
    contato: {
      id: number
      nome: string
      situacao: ISituacao
    }
  }
}
