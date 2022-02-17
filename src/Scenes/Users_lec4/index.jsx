import { useState, useEffect } from "react"
import { api } from "Services/api"
import UserCard from "Components/UserCard"
import Grid from "@mui/material/Grid"

const Users = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = (data = {}) => {
    const params = {
      results: 10,
      ...data,
    }

    api
      .get("/", { params })
      .then((response) => {
        // handle success
        setUsers(response.data.results)
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const onFilter = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const formProps = Object.fromEntries(formData)
    fetchUsers(formProps)
  }

  return (
    <form onSubmit={onFilter}>
      <select name="nat">
        <option value="">All</option>
        <option value="us">US</option>
        <option value="dk">DK</option>
        <option value="fr">FR</option>
        <option value="gb">GB</option>
      </select>
      <select name="gender">
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Filter</button>
      <Grid container spacing={2}>
        {users.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))}
      </Grid>
    </form>
  )
}

export default Users
