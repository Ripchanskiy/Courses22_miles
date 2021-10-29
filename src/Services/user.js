import { api } from "./api"

export const fetchUsers = async ({ results, gender, nationality } = {}) => {
  const params = {
    results: results || 15,
    // https://medium.com/@slamflipstrom/conditional-object-properties-using-spread-in-javascript-714e0a12f496
    ...(gender && { gender }),
    ...(nationality?.length && { nat: nationality.join(",") }),
    // круто, если кто-то воспользуется этой возможностью
    inc: "gender,email,dob,name,picture,nat",
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
