/**
 * Tipagem referente ao formato do produto.
 *
 * - `S`: Simples
 * - `V`: Com variações
 * - `E`: Com composição
 */
export type IFormato = 'S' | 'V' | 'E'

/**
 * Formato de uma variação.
 *
 * Uma variação não usa `V` (com variações).
 *
 * - `S`: Simples
 * - `E`: Com composição
 */
export type IFormatoVariacao = 'S' | 'E'
