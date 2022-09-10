/**
 * Return a stringified form of Date object.
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @param {Date} date The date object to be stringified
 *
 * @returns {string} The stringified date.
 */
export default (date: Date) => {
  if (date) {
    return `${String(date.getDate()).padStart(2, '0')}/${String(
      date.getMonth() + 1
    ).padStart(2, '0')}/${date.getFullYear()}`
  } else {
    return date
  }
}
