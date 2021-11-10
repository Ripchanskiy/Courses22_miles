import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { fetchUsers } from "Services/user"
import UserCard from "Components/UserCard"
import createUrlSearchParams from "Utils/helpers/createUrlSearchParams"
import useQueryParams from "Hooks/useQueryParams"
import styles from "./styles.module.sass"
import Navigation from "./components/Navigation"

const Users = () => {
  // eslint-disable-next-line no-console
  console.log("Users render")
  const [users, setUsers] = useState([])
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const { gender, nat } = useQueryParams()

  const onFetchUsers = async (params) => {
    const { error, data } = await fetchUsers(params)

    if (!error) setUsers(data.results)
  }

  const setUrlSearchParams = (formData) => {
    const urlSearchParams = createUrlSearchParams(formData)
    history.push(`${history.location.pathname}?${urlSearchParams.toString()}`)
  }

  const onSubmit = (formData) => setUrlSearchParams(formData)

  useEffect(() => {
    onFetchUsers({
      gender,
      nat,
      // results: 3,
      // inc: "gender,email,dob,name,picture,nat,id",
    })
  }, [gender, nat])

  return (
    <div>
      <Navigation
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        gender={gender}
        nat={nat}
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
