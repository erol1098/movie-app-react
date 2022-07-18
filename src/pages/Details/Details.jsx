import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Details = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {!isLoggedIn && <Navigate to="/login" />}
      {isLoggedIn && <div>Logged In</div>}
    </>
  );
};

export default Details;
