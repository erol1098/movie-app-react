import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: query });
  };
  return (
    <nav className="navbar sticky-top bg-light">
      <div className="container-fluid py-2">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {"   "}Seeker
        </Link>
        <form
          className="d-flex justify-content-between"
          role="search"
          onSubmit={submitHandler}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-outline-primary ms-2"
            type="button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
