import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
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
        <button className="btn btn-outline-success" type="button">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
