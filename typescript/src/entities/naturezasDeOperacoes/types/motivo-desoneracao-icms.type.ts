/**
 * Tipagem referente ao motivo de desoneração do ICMS.
 *
 * - `0`: Nenhum
 * - `1`: Táxi
 * - `3`: Produtor Agropecuário
 * - `4`: Frotista/Locadora
 * - `5`: Diplomático/Consular
 * - `6`: Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre
 * Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações)
 * - `7`: SUFRAMA
 * - `8`: Venda a Órgão Público
 * - `9`: Outros
 * - `10`: Deficiente Condutor
 * - `11`: Deficiente Não Condutor
 * - `90`: Solicitado pelo Fisco
 */
export type IMotivoDesoneracaoICMS =
  | 0
  | 1
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 90
