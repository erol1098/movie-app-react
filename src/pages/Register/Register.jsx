import React from "react";

const Register = () => {
  return (
    <form className="container mt-5 w-25">
      <div className="form-floating mb-3">
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
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="w-100 mb-3">
        <button type="submit" className="btn btn-primary w-100">
          Create New Account
        </button>
      </div>
      <div className="w-100">
        <button type="button" className="btn btn-outline-info w-100">
          Create New Account
        </button>
      </div>
    </form>
  );
};

export default Register;
