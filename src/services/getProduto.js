import { api } from './api'

export async function getProduto(id) {
  try {
    const { data } = await api.get(`/products/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}
