/**
 * Tipagem referente à origem de um item.
 *
 * - `0`: Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8
 * - `1`: Estrangeira - Importação direta, exceto a indicada no código 6
 * - `2`: Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7
 * - `3`: Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%
 * - `4`: Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes
 * - `5`: Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%
 * - `6`: Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX
 * - `7`: Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista da CAMEX
 * - `8`: Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%
 */
type IOrigem = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export default IOrigem
