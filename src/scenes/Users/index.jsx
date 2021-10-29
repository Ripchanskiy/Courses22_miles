import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import styles from "./styles.module.sass"
import { fetchUsers } from "../../services/user"
import UserCard from "../../components/UserCard"
import Navigation from "./components/Navigation"

const Users = () => {
  const [users, setUsers] = useState([])
  const { register, handleSubmit } = useForm()

  const onFetchUsers = async (params) => {
    const { error, data } = await fetchUsers(params)

    if (!error) setUsers(data.results)
  }

  useEffect(() => {
    onFetchUsers()
  }, [])

  const onSubmit = (data) => onFetchUsers(data)

  return (
    <div>
      <Navigation
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <ul className={styles.users__list}>
        {users.map((user) => (
          <UserCard user={user} key={`${user.email}-key`} />
        ))}
      </ul>
    </div>
  )
}

export default Users
