import { Switch, Route } from "react-router-dom"
import Lesson1 from "Scenes/Lesson1"
import Lesson2 from "Scenes/Lesson2"
import Users from "Scenes/Users"
import UsersNew from "Scenes/Users_new"
import Users4 from "Scenes/Users_lec4"
import { Routes } from "Utils/constants/routes"

const Routing = () => (
  <Switch>
    <Route path={Routes.Lesson1} component={Lesson1} />
    <Route path={Routes.Lesson2} component={Lesson2} />
    <Route path={Routes.Users_new} component={UsersNew} />
    <Route path={Routes.Users_4} component={Users4} />
    <Route path={Routes.BaseUrl} component={Users} />
  </Switch>
)

export default Routing
