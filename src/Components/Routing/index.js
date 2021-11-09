import { Switch, Route } from "react-router-dom"
import Lesson1 from "Scenes/Lesson1"
import Users from "Scenes/Users"
import { Routes } from "Utils/constants/routes"

const Routing = () => (
  <Switch>
    <Route path={Routes.Lesson1} component={Lesson1} />
    <Route path={Routes.BaseUrl} component={Users} />
  </Switch>
)

export default Routing
