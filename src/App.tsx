import "../src/assets/styles/index.css"
// import { Quotes } from "./features/quotes/Quotes"
import Home from "./pages/Home/Home"
import AppRoutes from '../src/routers/AppRoutes.jsx'
export const App = () => (
  <div className="App">
    <header className="App-header">
      <AppRoutes />
      {/* <Quotes /> */}
    </header>
  </div>
)
