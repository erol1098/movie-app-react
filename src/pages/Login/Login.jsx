import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuth();
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_KEY}`;
  const submitHandler = (e) => {
    e.preventDefault();
    login(mail, password, URL);
    navigate(-1);
  };

  return (
    <>
      {error && <p>{error.response.data.error.message}</p>}
      <form className="container mt-5 w-25" onSubmit={submitHandler}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="w-100 mb-3">
          <button
            type="submit"
            disabled={!isLoading ? false : true}
            className="btn btn-primary w-100"
          >
            {!isLoading ? "Sign in" : "Sending Request"}
          </button>
        </div>
        <div className="w-100">
          <button type="button" className="btn btn-outline-info w-100">
            Create New Account
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
