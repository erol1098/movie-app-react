import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
