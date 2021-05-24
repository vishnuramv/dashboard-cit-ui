import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Reset from "./Components/Reset/Reset";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/" exact>
            <h1>Welcome!</h1>
            <Link to="/login">Login</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
