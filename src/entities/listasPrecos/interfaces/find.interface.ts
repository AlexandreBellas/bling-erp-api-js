import { ITipo } from '../types/tipo.type'
import { ICategoria } from '../types/categoria.type'
import { ITipo12 } from '../types/tipo12.type'

export interface IListasPrecosDTO {
  id?: number
  nome?: string
  /**
   * `1` Percentual/Valor `2` Período `3` Customizada
   */
  tipo?: ITipo
  /**
   * `0` Nenhuma `1` Contato `2` Vendedor `3` Forma de pagamento `4` Região `5` Loja
   */
  categoria?: ICategoria
  /**
   * Sempre `null` para listas do tipo Customizada (preço negociado não é exposto por este endpoint).
   */
  fator?: {
    /**
     * `1` Porcentagem `2` Valor
     */
    tipo?: ITipo12
    valor?: number
  } | null
  /**
   * Ids (ou UFs, para categoria região) vinculados à lista
   */
  vinculos?: (number | string)[]
  dataInicio?: string | null
  dataFim?: string | null
}

export interface IFindParams {
  /**
   * ID da lista de preço
   */
  idListaPreco: number
}

export interface IFindResponse {
  data?: IListasPrecosDTO
}
