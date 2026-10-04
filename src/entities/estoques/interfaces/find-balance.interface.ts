import IFiltroSaldoEstoque from '../../@shared/types/filtro-saldo-estoque.type'

export interface IFindBalanceParams {
  /**
   * ID do depósito
   */
  idDeposito: number
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
  /**
   * Códigos dos produtos
   */
  codigos?: string[]
  /**
   * Filtra o saldo em estoque. `0` zerado, `1` positivo, `2` negativo.
   */
  filtroSaldoEstoque?: IFiltroSaldoEstoque
}

export interface IFindBalanceResponse {
  data: {
    produto: { id: number; codigo?: string }
    saldoFisicoTotal: number
    saldoVirtualTotal: number
  }[]
}
