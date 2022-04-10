export default (date: Date) => {
  if (date) {
    return `${String(date.getDate()).padStart(2, '0')}/${String(
      date.getMonth() + 1
    ).padStart(2, '0')}/${date.getFullYear()}`
  } else {
    return date
  }
}
