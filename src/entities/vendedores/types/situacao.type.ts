/**
 * Tipagem referente à situação do vendedor.
 *
 * - `A`: Ativo
 * - `I`: Inativo
 * - `S`: Sem movimento
 * - `E`: Excluído
 * - `T`: Todos
 */
export type ISituacao = 'A' | 'I' | 'S' | 'E' | 'T'

/**
 * Situação do contato no retorno do vendedor.
 *
 * - `A`: Ativo
 * - `I`: Inativo
 * - `S`: Sem movimento
 * - `E`: Excluído
 */
export type ISituacaoContato = 'A' | 'I' | 'S' | 'E'
