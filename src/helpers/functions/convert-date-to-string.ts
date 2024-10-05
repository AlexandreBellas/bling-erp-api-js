/**
 * Converte um objeto `Date` para o formato `YYYY-MM-DD` (opcionalmente `YYYY-MM-DD HH:MM:SS`).
 */
export default (date: Date, includeTime: boolean = false) => {
  const baseTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  if (!includeTime) return baseTime

  return `${baseTime} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
