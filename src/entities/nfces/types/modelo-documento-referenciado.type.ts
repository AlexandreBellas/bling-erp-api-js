/**
 * Tipagem referente ao modelo do documento fiscal referenciado na NFC-e.
 *
 * - `1`: Nota fiscal talão
 * - `2`: Nota fiscal de consumidor talão
 * - `2D`: Cupom fiscal
 * - `4`: Nota de produtor
 * - `55`: NF-e
 * - `65`: NFC-e
 */
export type IModeloDocumentoReferenciadoNfce =
  | '1'
  | '2'
  | '2D'
  | '4'
  | '55'
  | '65'