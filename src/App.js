import "./App.css";
import { BrowserRouter as Router, 
  Route,
 } from "react-router-dom";
 import Routers from './components/_routes'

function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
