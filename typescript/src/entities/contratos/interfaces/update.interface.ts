import { INotaFiscalDescontarImpostoRenda } from '../types/nota-fiscal-descontar-imposto-renda.type'
import { INotaFiscalGerar } from '../types/nota-fiscal-gerar.type'
import { INotaFiscalMes } from '../types/nota-fiscal-mes.type'
import { IPeriodicidade } from '../types/periodicidade.type'
import { ISituacao } from '../types/situacao.type'
import { ITipoManutencao } from '../types/tipo-manutencao.type'
import { ITipoVencimento } from '../types/tipo-vencimento.type'

export interface IUpdateParams {
  /**
   * ID do contrato
   */
  idContrato: number
}

export interface IUpdateBody {
  descricao: string
  data: string
  numero: string
  valor: number
  situacao: ISituacao
  contato: { id: number }
  dataFim: string
  tipoManutencao: ITipoManutencao
  emitirOrdemServico: boolean
  observacoes: string
  vendedor: {
    id: number
    comissao: {
      aliquota: number
      numeroParcelas: number
    }
  }
  categoria: { id: number }
  desconto: {
    valor: number
    dataFim: string
  }
  contaContabil: { id: number }
  formaPagamento: { id: number }
  notaFiscal: {
    mes: INotaFiscalMes
    gerar: INotaFiscalGerar
    descontarImpostoRenda: INotaFiscalDescontarImpostoRenda
    texto: string
    cfop: string
    iss: {
      descontar: boolean
      aliquota: number
    }
    item: {
      codigoServico: string
      produto: { id: number }
    }
  }
  cobranca: {
    dataBase: string
    contato: { id: number }
    vencimento: {
      tipo: ITipoVencimento
      dia: number
      periodicidade: IPeriodicidade
    }
  }
}

export interface IUpdateResponse {
  data: { id: number }
}
