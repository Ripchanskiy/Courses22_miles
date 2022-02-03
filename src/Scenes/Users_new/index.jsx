import { useState, useEffect } from "react"

const UsersNew = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersx) => setUsers(usersx))
  }, [])
  // eslint-disable-next-line no-console
  console.log(users)
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </div>
  )
}

export default UsersNew
