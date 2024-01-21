/**
 * Tipagem representativa da situação.
 *
 * `1`: Em aberto
 * `2`: Recebido
 * `3`: Parcialmente recebido
 * `4`: Devolvido
 * `5`: Cancelado
 * `6`: Devolvido parcial
 * `7`: Confirmado
 */
export type ISituacao = 1 | 2 | 3 | 4 | 5 | 6 | 7

/**
 * Tipagem representativa da situação em formato `string`.
 */
export type ISituacaoString =
  | 'aberto'
  | 'confirmado'
  | 'pacial'
  | 'devolvido'
  | 'devolvidoP'
  | 'pago'
  | 'cancelada'
