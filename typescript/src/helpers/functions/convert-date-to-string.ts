/**
 * Converte um objeto `Date` para o formato `YYYY-MM-DD`.
 */
export default (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
