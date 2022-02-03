import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "./styles.module.sass"
import cssStyles from "./styles.module.css"

const ButtonComponent = styled.button`
  height: 20px;
`

const TomatoButton = styled(ButtonComponent)`
  color: tomato;
  border-color: tomato;
`

const GreenButton = styled(ButtonComponent)`
  color: green;
  border-color: green;
`

const UserCard = ({ user }) => {
  const { gender, email, dob, name, picture, nat } = user
  const formattedDob = new Date(dob.date).toISOString().slice(0, 10)

  return (
    <li className={styles.userCard}>
      <div className="global_style_example global_style_example_2">
        Global styles example
      </div>
      <div style={{ backgroundColor: "red" }}>Global styles example</div>
      <div className={cssStyles.global_style_example}>
        CSS-module styles example
      </div>
      <TomatoButton> Button tomato</TomatoButton>
      <GreenButton> Button green</GreenButton>
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
          <p>{nat}</p>
        </div>
      </div>
    </li>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    gender: PropTypes.string,
    nat: PropTypes.string,
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
