import users from "Utils/mockData/users.json"
import UserCard from "Components/Lesson1_UserCard"
import styles from "./styles.module.sass"

export default function Lesson2() {
  const usersList = users.map((user) => <UserCard user={user} key={user.id} />)

  return (
    <div className={styles.users}>
      <ul className={styles.users__list}>{usersList}</ul>
    </div>
  )
}
