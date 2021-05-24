import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Reset from "./Components/Reset/Reset";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>Welcome!</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
