import React from "react"
import ReactDOM from "react-dom"
import "Styles/index.sass"
// https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d
import App from "Components/App"
import initSentry from "Utils/helpers/centry"

// production only
// sentry.io/organizations/milestep-dw/issues/?project=6183624&query=is%3Aunresolved
// initSentry()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
