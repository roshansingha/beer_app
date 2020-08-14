import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and logged in, redirect to homepage
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <h1 className="tag">Welcome</h1>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="signIn">
            Sign In
          </button>

          <p className="para">
            By signing-in you agree to our our Terms and Conditions. Please see
            our Privacy Notice, our Cookies Notice and our Interest-Based Ads
            Notice.
          </p>
          <button onClick={register} className="register">
            Create your Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
