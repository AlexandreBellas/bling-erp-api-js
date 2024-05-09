/**
 * Tipagem representativa do código fiscal de um contato.
 *
 * `1`: Dinheiro
 * `2`: Cheque
 * `3`: Cartão de crédito
 * `4`: Cartão de débito
 * `5`: Crédito loja
 * `10`: Vale alimentação
 * `11`: Vale refeição
 * `12`: Vale presente
 * `13`: Vale combustível
 * `14`: Duplicata mercantil
 * `15`: Boleto bancário
 * `16`: Depósito bancário
 * `17`: PIX
 * `18`: Transferência bancária
 * `19`: Cartão virtual
 * `90`: Sem pagamento
 * `99`: Outros
 */
export type ICodigoFiscal =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 90
  | 99
