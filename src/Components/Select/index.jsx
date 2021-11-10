import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.sass"

const Select = ({
  list,
  label,
  registerKey,
  multiple,
  register,
  defaultValue,
}) => (
  <>
    <p>{label}</p>
    <select
      multiple={multiple}
      className={styles.select}
      {...register(registerKey)}
      // string or array of strings
      defaultValue={defaultValue}
    >
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
  registerKey: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

Select.defaultProps = {
  multiple: false,
  defaultValue: null,
}

export default Select
