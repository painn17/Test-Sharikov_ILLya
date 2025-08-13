import axios from 'axios'
const URL = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_API_TOKEN
export const api = {
  async getInfo(dateFrom, dateTo, page = 1, limit = 50, url) {
    const params = { key: token, page, limit }
    if (dateFrom) params.dateFrom = dateFrom
    if (dateTo) params.dateTo = dateTo
    try {
      const response = await axios.get(`${URL}/${url}`, { params })
      return response
    } catch (error) {
      console.error('Ошибка:', error)
      return error
    }
  },
}
