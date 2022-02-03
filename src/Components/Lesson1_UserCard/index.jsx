import PropTypes from "prop-types"
import { Gender } from "Utils/constants/gender"

// Вывод объекта пропсов

// const UserCard = (props) => {
//   // eslint-disable-next-line no-console
//   console.log(props)
//   return <p>Test Card</p>
// }

// вывод user, default values и proptypes

const UserCard = (props) => {
  // eslint-disable-next-line no-console
  console.log(props)
  const { user, test } = props
  return (
    <li key={user.id}>
      {user.gender === Gender.Female
        ? `Miss ${user.name}${test}`
        : `Mr. ${user.name}`}
    </li>
  )
}

// неправильный тип user

// UserCard.propTypes = {
//   user: PropTypes.string.isRequired,
//   test: PropTypes.string,
// }

// описываем тип user
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  test: PropTypes.string,
}

UserCard.defaultProps = {
  test: "+++++++++++++",
}

export default UserCard
