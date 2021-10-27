import React, { useState, useEffect } from "react"
import styles from "./styles.module.sass"
import { fetchUsers } from "../../services/user"
import UserCard from "../../components/UserCard"

const Users = () => {
  const [users, setUsers] = useState([])

  const onFetchUsers = async () => {
    const { error, data } = await fetchUsers()

    if (!error) setUsers(data.results)
  }

  useEffect(() => {
    onFetchUsers()
  }, [])

  return (
    <ul className={styles.users}>
      {users.length &&
        users.map((user) => <UserCard user={user} key={user.email} />)}
    </ul>
  )
}

export default Users
