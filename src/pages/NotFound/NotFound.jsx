import React from "react";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="container d-flex flex-column justify-content-center align-items-center gap-5 py-5">
      <h2 className="display-1">404</h2>
      <h3 className="display-3">Page not found</h3>
      <div className="d-flex gap-3 justify-content-center">
        <button className="btn btn-success" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default NotFound;
