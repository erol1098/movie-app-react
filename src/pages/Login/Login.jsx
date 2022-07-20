import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ShowModal from "../../components/UI/Modal/Modal";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuth();
  const { getUserInfo } = useToken();
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_KEY}`;
  const submitHandler = (e) => {
    e.preventDefault();
    login(mail, password, URL);
  };

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
    google.accounts.id.prompt();
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

      <form
        className="container mt-5 w-100"
        style={{ maxWidth: "40rem" }}
        onSubmit={submitHandler}
      >
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

export default Login;
