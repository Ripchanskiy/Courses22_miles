import users from "Utils/mockData/users.json"
import { Gender } from "Utils/constants/gender"
import UserCard from "Components/Lesson1_UserCard"
import styles from "./styles.module.sass"

const Lesson1 = () => {
  // eslint-disable-next-line no-console
  console.log(users)

  // const usersList = users.map((user) => <li>{user.name}</li>)
  // eslint-disable-next-line no-console
  // console.log(usersList)

  // const usersList = users.map((user) => <li key={user.id}>{user.name}</li>)

  // if рендеринг &&
  // const usersList = users.map((user) => (
  //   <li key={user.id}>
  //     {user.name}
  //     {user.gender === Gender.Female && " (в активном поиске)"}
  //   </li>
  // ))

  // else-if(ternary) рендеринг
  // const usersList = users.map((user) => {
  //   const isFemale = user.gender === Gender.Female
  //   return (
  //     <li key={user.id}>
  //       {isFemale ? "Miss " : " Mr. "}
  //       {user.name}
  //       {isFemale && " (в активном поиске)"}
  //     </li>
  //   )
  // })

  // шаблонные литералы
  // const usersList = users.map((user) => (
  //   <li key={user.id}>
  //     {user.gender === Gender.Female
  //       ? `Miss ${user.name} (в активном поиске)`
  //       : `Mr. ${user.name}`}
  //   </li>
  // ))

  // const onUserDelete = (userId) => {
  //
  // }
  //
  // использование компонента UserCard
  const usersList = users.map((user) => <UserCard user={user} key={user.id} />)

  return (
    <div className={styles.users}>
      <ul className={styles.users__list}>{usersList}</ul>
    </div>
  )
}
export default Lesson1
