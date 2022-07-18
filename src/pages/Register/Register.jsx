import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuth();
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTH_KEY}`;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password, URL);
  };
  return (
    <>
      {error && <p>{error.response.data.error.message}</p>}
      <form className="container mt-5 w-25" onSubmit={submitHandler}>
        {/* <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingText1"
            placeholder="Enter your first name"
          />
          <label htmlFor="floatingText1">First name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingText2"
            placeholder="Enter your last name"
          />
          <label htmlFor="floatingText2">Last name</label>
        </div> */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
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
          <button type="submit" className="btn btn-primary w-100">
            {!isLoading ? "Create New Account" : "Sending Request"}
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

export default Register;
