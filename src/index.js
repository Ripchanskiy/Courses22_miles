import React from "react"
import ReactDOM from "react-dom"
import "Styles/index.sass"
// https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d
import App from "Components/App"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
