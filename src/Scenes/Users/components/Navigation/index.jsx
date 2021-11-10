import React from "react"
import PropTypes from "prop-types"
import nationalitiesList from "Utils/data/nationalities"
import genderList from "Utils/data/gender"
import Select from "Components/Select"
import styles from "./styles.module.sass"

const Navigation = ({ register, handleSubmit, onSubmit, gender, nat }) => {
  // eslint-disable-next-line no-console
  console.log("Navigation render")
  const selectedNationalities = nat ? nat.split(",") : []

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.navigation__form}
      >
        <div className={styles.navigation__select}>
          <Select
            label="gender"
            list={genderList}
            register={register}
            registerKey="gender"
            defaultValue={gender}
          />
        </div>
        <div className={styles.navigation__select}>
          <Select
            label="nationality"
            list={nationalitiesList}
            multiple
            register={register}
            registerKey="nat"
            defaultValue={selectedNationalities}
          />
        </div>
        <button type="submit">Apply filters</button>
      </form>
    </div>
  )
}

Navigation.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  gender: PropTypes.string,
  nat: PropTypes.string,
}

Navigation.defaultProps = {
  gender: "",
  nat: "",
}

export default Navigation
