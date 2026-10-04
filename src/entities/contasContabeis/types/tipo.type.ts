/**
 * Tipo da conta financeira.
 *
 * - `banco`: Configuração de boleto CNAB
 * - `caixa`: Portador caixa sem integração
 * - `conta-bancaria`: Contas configuradas para cashout (TED ou Pix)
 * - `integracao-pagamento`: Configurações de integração
 */
export type ITipo =
  | 'banco'
  | 'caixa'
  | 'conta-bancaria'
  | 'integracao-pagamento'
