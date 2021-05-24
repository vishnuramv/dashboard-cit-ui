import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import "./Login.css";

const Login = () => {
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
              <div>
                <label for="email">
                  <EmailIcon />
                </label>
                <input type="text" value="" name="email" id="email" />
              </div>
              <div>
                <label for="password">
                  <LockIcon />
                </label>
                <input type="password" value="" id="password" name="password" />
              </div>
              <button className="login__btn" type="submit">
                Sign in
              </button>
            </form>
          </CardContent>

          <CardActions>
            <div className="login__actions">
              <div className="login__redirects">
                <div>
                  <p>Not a user??</p>
                  <a href="/signup">Create an account</a>
                </div>
                <div>
                  <a href="/reset">Forgot password</a>
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
