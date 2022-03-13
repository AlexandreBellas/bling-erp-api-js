import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'
import Delete from '../core/functions/delete'

type IPaymentMethodCodigoFiscal =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '90'
  | '99'

type IPaymentMethodSituacao = '0' | '1'

type IPaymentMethodPadrao = '0' | '1'

type IPaymentMethodDestino = '1' | '2' | '3'

type IPaymentMethodBandeira =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '99'

type IPaymentMethodTipoIntegracao = '1' | '2'

type IPaymentMethodAutoLiquidacao = '1' | '2'

export interface IPaymentMethod {
  descricao: string
  codigofiscal?: IPaymentMethodCodigoFiscal
  condicao?: string
  destino?: IPaymentMethodDestino
  padrao?: IPaymentMethodPadrao
  situacao?: IPaymentMethodSituacao
  dadoscartao?: {
    bandeira?: IPaymentMethodBandeira
    tipointegracao?: IPaymentMethodTipoIntegracao
    cnpjcredenciadora?: string
    autoliquidacao?: IPaymentMethodAutoLiquidacao
  }
  dadostaxas?: {
    valoraliquota?: string
    valorfixo?: string
    prazo?: string
  }
}

export interface IPaymentMethodFilters {
  descricao?: string
  codigoFiscal?: number
  situacao?: IPaymentMethodSituacao
}

export type IPaymentMethodInfos = Record<string, never>

export interface IPaymentMethodCreateResponse {
  id: string
  descricao: string
  idDestino: number
  tband: number
  tpIntegra: number
  cnpjCredenciadora?: string
  autoLiquidacao: number
}

export interface IPaymentMethodDeleteResponse {
  id: string
  descricao: string
  mensagem: string
}

export interface IPaymentMethodResponse {
  id: string
  descricao: string
  codigoFiscal: IPaymentMethodCodigoFiscal
  padrao: IPaymentMethodPadrao
  situacao: IPaymentMethodSituacao
  fixa: string
}

export default function PaymentMethods (api: IApiInstance) {
  const config = {
    api,
    singularName: 'formapagamento',
    pluralName: 'formaspagamento'
  }

  // @TODO: deal with "IPaymentMethodCreateResponse" content properly

  return Object.assign(config, {
    all: new All<
      IPaymentMethodResponse,
      IPaymentMethodFilters,
      IPaymentMethodInfos
    >().all,
    find: new Find<IPaymentMethodResponse, IPaymentMethodInfos>().find,
    findBy: new FindBy<
      IPaymentMethodResponse,
      IPaymentMethodFilters,
      IPaymentMethodInfos
    >().findBy,
    create: new Create<IPaymentMethod, IPaymentMethodCreateResponse>().create,
    update: new Update<IPaymentMethod, IPaymentMethodCreateResponse>().update,
    delete: new Delete<IPaymentMethodDeleteResponse>().delete
  })
}
