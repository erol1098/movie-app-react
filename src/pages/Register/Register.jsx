import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ShowModal from "../../components/UI/Modal/Modal";
import useToken from "../../hooks/useToken";
const Register = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const { login, isLoading, error } = useAuth();

  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTH_KEY}`;
  // const setURL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${AUTH_KEY}`;
  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password, URL);
  };
  const { getUserInfo } = useToken();
  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "973641536091-nlvjupnjkuiofhpc72ljklfc4eflg61o.apps.googleusercontent.com",
      callback: getUserInfo,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [getUserInfo]);
  return (
    <>
      {error && (
        <ShowModal
          flag={true}
          title={"Authentication Error"}
          message={error.response.data.error.message}
        />
      )}
      <form className="container mt-5 w-25" onSubmit={submitHandler}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingText1"
            placeholder="Enter your first name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <label htmlFor="floatingText1">First name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingText2"
            placeholder="Enter your last name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
          <label htmlFor="floatingText2">Last name</label>
        </div>
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
        <div className="w-100 d-flex justify-content-center">
          <div id="signInDiv" className="border border-0"></div>
          {/* <button type="button" className="btn btn-outline-info w-100">
            Create New Account
          </button> */}
        </div>
      </form>
    </>
  );
};

export default Register;
