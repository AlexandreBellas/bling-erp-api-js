/**
 * Tipagem representativa do tipo da categoria.
 *
 * `1`: Despesa
 * `2`: Receita
 * `3`: Receita e despesa
 */
export type ITipo = 1 | 2 | 3

/**
 * Filtro de tipo na listagem.
 *
 * `0`: Todas
 * `1`: Despesa
 * `2`: Receita
 * `3`: Receita e despesa
 */
export type ITipoFiltro = 0 | ITipo
