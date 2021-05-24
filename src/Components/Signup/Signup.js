import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Error as ErrorIcon, SupervisedUserCircle } from "@material-ui/icons";
import { Card, CardContent } from "@material-ui/core";
import "./Signup.css";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMsge, setErrorMsge] = useState(null);

  const emailChange = (event) => {
    setErrorMsge(null);
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setErrorMsge(null);
    setPassword(event.target.value);
  };

  const usernameChange = (event) => {
    setErrorMsge(null);
    setUsername(event.target.value);
  };

  const signUp = (event) => {
    event.preventDefault();
    if ((email && password) !== "") {
      history.push("/");
    } else {
      setErrorMsge("The Fields cannot be Empty!");
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <Card variant="outlined" className="signup__card">
          <img
            className="signup__image"
            src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg"
            alt="signup"
          />
          <CardContent>
            <form className="signup__form">
              <h2>Create An Account</h2>
              {errorMsge ? (
                <p>
                  <ErrorIcon /> {errorMsge}
                </p>
              ) : null}
              <div>
                <label for="username">
                  <SupervisedUserCircle />
                </label>
                <input
                  type="text"
                  value={username}
                  name="username"
                  id="username"
                  onChange={usernameChange}
                  placeholder="Username"
                />
              </div>
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

              <button className="signup__btn" type="submit" onClick={signUp}>
                Sign Up
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
