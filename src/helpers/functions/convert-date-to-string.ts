/**
 * Converte um objeto `Date` para `YYYY-M-D` (opcionalmente `YYYY-M-D H:M:S`), sem zero-padding.
 */
export default (date: Date, includeTime: boolean = false) => {
  const baseTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  if (!includeTime) return baseTime

  return `${baseTime} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
