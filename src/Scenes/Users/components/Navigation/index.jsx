import React from "react"
import PropTypes from "prop-types"
import { nationality } from "Utils/constants/nationality"
import { gender } from "Utils/constants/gender"
import Select from "Components/Select"

import styles from "./styles.module.sass"

const Navigation = ({ register, handleSubmit, onSubmit }) => (
  <div>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.navigation__form}>
      <div className={styles.navigation__select}>
        <Select label="gender" list={gender} register={register} />
      </div>
      <div className={styles.navigation__select}>
        <Select
          label="nationality"
          list={nationality}
          multiple
          register={register}
        />
      </div>
      <button type="submit">Apply filters</button>
    </form>
  </div>
)

Navigation.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Navigation
