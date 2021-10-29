import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.sass"

const Select = ({ list, label, multiple, register }) => (
  <>
    <p>{label}</p>
    <select multiple={multiple} className={styles.select} {...register(label)}>
      {list.map(({ value, label: optionLabel }) => (
        <option value={value} key={`${value}-key`}>
          {optionLabel}
        </option>
      ))}
    </select>
  </>
)

Select.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
}

Select.defaultProps = {
  multiple: false,
}

export default Select
