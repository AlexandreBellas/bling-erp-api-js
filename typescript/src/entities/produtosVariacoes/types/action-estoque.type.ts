/**
 * Tipagem referente à ação de estoque ao transformar um produto simples em
 * variação.
 *
 * - `Z`: Irá zerar os saldos de estoque
 * - `T`: Transfere o estoque do produto pai para a primeira variação informada
 */
export type IActionEstoque = 'Z' | 'T'
