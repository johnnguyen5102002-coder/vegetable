import "./App.css"
import { Quotes } from "./features/quotes/Quotes"
import Home from "./pages/Home/Home";
export const App = () => (
  <div className="App">
    <header className="App-header">
      <Home />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Quotes />
    
    </header>
  </div>
)
