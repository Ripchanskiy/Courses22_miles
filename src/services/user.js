import { api } from "./api"

export const fetchUsers = async ({ results } = {}) => {
  const params = {
    results: results || 15,
  }

  const response = await api
    .get("/", { params })
    .then((res) => ({
      error: null,
      data: res.data,
    }))
    .catch((error) => ({
      error: error.message,
      data: null,
    }))
  return response
}
