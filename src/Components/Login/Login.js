import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Error as ErrorIcon } from "@material-ui/icons";
import { Card, CardActions, CardContent } from "@material-ui/core";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsge, setErrorMsge] = useState(null);

  const emailChange = (event) => {
    setErrorMsge(null);
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setErrorMsge(null);
    setPassword(event.target.value);
  };

  const signIn = (event) => {
    event.preventDefault();
    if ((email && password) !== "") {
      history.push("/");
    } else {
      setErrorMsge("The Fields cannot be Empty!");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <Card variant="outlined" className="login__card">
          <img
            className="login__image"
            src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg"
            alt="Login"
          />
          <CardContent>
            <form className="login__form">
              <h2>Sign In</h2>
              {errorMsge ? (
                <p>
                  <ErrorIcon /> {errorMsge}
                </p>
              ) : null}
              <div>
                <label for="email">
                  <EmailIcon />
                </label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  id="email"
                  onChange={emailChange}
                  placeholder="youremail@example.com"
                />
              </div>
              <div>
                <label for="password">
                  <LockIcon />
                </label>
                <input
                  type="password"
                  value={password}
                  id="password"
                  name="password"
                  onChange={passwordChange}
                  placeholder="password"
                />
              </div>
              <button className="login__btn" type="submit" onClick={signIn}>
                Sign in
              </button>
            </form>
          </CardContent>

          <CardActions>
            <div className="login__actions">
              <div className="login__redirects">
                <div>
                  <p>Not a user?</p>
                  <Link to="/signUp">Create an account</Link>
                </div>
                <div>
                  <Link to="/reset">Forgot password</Link>
                </div>
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Login;
