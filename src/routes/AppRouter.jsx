import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { useSelector, useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";
import { authActions } from "../store/auth-slicer";
const AppRouter = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div
      onClick={() =>
        localStorage.getItem("willExpire") <= new Date().getTime() &&
        dispatch(authActions.logout())
      }
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {isLoggedIn && <Route path="search" element={<Search />} />}
          {!isLoggedIn && <Route path="search" element={<Login />} />}
          {isLoggedIn && <Route path="details/:id" element={<Details />} />}
          {!isLoggedIn && <Route path="details/:id" element={<Login />} />}
          {!isLoggedIn && <Route path="login" element={<Login />} />}
          {isLoggedIn && <Route path="login" element={<Navigate to={"/"} />} />}
          {!isLoggedIn && <Route path="register" element={<Register />} />}
          <Route path="register" element={<Register />} />
          {isLoggedIn && (
            <Route path="register" element={<Navigate to={"/"} />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
