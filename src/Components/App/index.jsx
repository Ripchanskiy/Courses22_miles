import { BrowserRouter } from "react-router-dom"
import Routing from "Components/Routing"
import PageTemplate from "../PageTemplate"

const App = () => (
  <BrowserRouter>
    <PageTemplate>
      <Routing />
    </PageTemplate>
  </BrowserRouter>
)

export default App
