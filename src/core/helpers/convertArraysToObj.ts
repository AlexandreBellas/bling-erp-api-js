/* eslint-disable @typescript-eslint/no-explicit-any */
const convertArraysToObj = (data: any) => {
  const processedData = {} as Record<string, unknown>

  for (const key in data) {
    const value = data[key]

    if (Array.isArray(value)) {
      const firstElem = value[0]

      if (typeof firstElem === 'object') {
        const attr = Object.keys(firstElem)[0]

        const newElems = { [attr]: value.map((item) => item[attr]) }
        processedData[key] = newElems
      } else {
        processedData[key] = value
      }
    } else if (value && typeof value === 'object') {
      processedData[key] = convertArraysToObj(value)
    } else if (value !== null && value !== undefined && value !== '') {
      processedData[key] = value
    }
  }

  return processedData
}

export default convertArraysToObj
