import { api } from "./api"

export const fetchUsers = async (formData = {}) => {
  const params = {
    results: 15,
    // круто, если кто-то воспользуется этой возможностью
    inc: "gender,email,dob,name,picture,nat",
    // https://medium.com/@slamflipstrom/conditional-object-properties-using-spread-in-javascript-714e0a12f496
    // ...(formData.gender && { gender: formData.gender }),
    // ...(formData.nat && { nat: formData.nat }),
    // ...(nat && { nat }),
    // В самом конце для оверрайда дефолтных параметров(results и inc)
    ...formData,
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
