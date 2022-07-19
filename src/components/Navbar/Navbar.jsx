import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slicer";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { name, image } = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: query });
  };
  return (
    <nav className="navbar sticky-top bg-light px-5 py-2">
      <div className="container-fluid py-2 d-flex align-items-stretch flex-column gap-3  flex-md-row align-items-md-center">
        <Link
          className="navbar-brand d-flex align-items-center justify-content-center gap-3"
          to="/"
        >
          <img
            src={logo}
            alt="logo"
            width="36"
            // height="24"
            className="d-inline-block m-0"
          />
          <h2 className="m-0">Seeker</h2>
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

        <div
          className={`${
            !isLoggedIn ? "d-block" : "d-none"
          } d-flex flex-column gap-2 flex-md-row   `}
        >
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>

        <div
          className={`${
            isLoggedIn ? "d-block" : "d-none"
          } d-flex align-items-center gap-3`}
        >
          <div className="d-none d-md-flex gap-2 align-items-center justify-content-center ">
            <p className="lead m-0 d-none d-lg-block">{name || "erol"}</p>
            <img
              src={
                image || `https://ui-avatars.com/api/?name=${name || "erol"}`
              }
              alt=""
              width={60}
              className="rounded-circle"
            />
          </div>
          <div className="w-100">
            <button
              className="btn btn-outline-primary w-100"
              type="button"
              onClick={() => {
                dispatch(authActions.logout());
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
