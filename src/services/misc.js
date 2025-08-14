export const normalizeItems = (items) => {
  return items.map((item) => {
    const normalized = {}
    for (const [key, value] of Object.entries(item)) {
      if (typeof value === 'boolean') {
        normalized[key] = value ? 'Да' : 'Нет'
      } else if (!isNaN(value) && value !== null && value !== '') {
        normalized[key] = Number(value)
      } else {
        normalized[key] = value
      }
    }
    return normalized
  })
}
