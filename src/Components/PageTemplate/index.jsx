import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.sass"

const PageTemplate = ({ children }) => (
  <div className={styles.pageTemplate}>
    <div className={styles.pageTemplate__container}>{children}</div>
  </div>
)

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PageTemplate
