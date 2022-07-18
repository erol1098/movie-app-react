import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";
import Auth from "../pages/Login/Auth";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
