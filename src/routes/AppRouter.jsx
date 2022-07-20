import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
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
  );
};

export default AppRouter;
