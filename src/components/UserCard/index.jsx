import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.sass"

const UserCard = ({ user }) => {
  const { gender, email, dob, name, picture } = user
  const formattedDob = new Date(dob.date).toISOString().slice(0, 10)

  return (
    <li className={styles.userCard}>
      <div className={styles.userCard__container}>
        <img
          src={picture.large}
          alt="user-avatar"
          className={styles.userCard__img}
        />
        <div className="userCard__details">
          <h4>
            <b
              className={styles.userCard__fullName}
            >{`${name.first} ${name.last}`}</b>
          </h4>
          <p>{gender}</p>
          <p className={styles.userCard__email}>{email}</p>
          <p>{formattedDob}</p>
        </div>
      </div>
    </li>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    gender: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.shape({
      date: PropTypes.string,
    }),
    picture: PropTypes.shape({
      large: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
  }).isRequired,
}

export default UserCard
