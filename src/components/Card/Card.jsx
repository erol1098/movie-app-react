import React from "react";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Card = ({ info }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const {
    id,
    original_title: title,
    poster_path: url,
    overview,
    release_date: date,
    vote_average: vote,
  } = info;

  return (
    <div
      className={`${styles.card} card pointer col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4 px-3 `}
      onClick={() => navigate(`/details/:${id}`, { state: id })}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${url}`}
        className="card-img-top mt-4 mb-3 img-thumbnail border rounded-5"
        alt="..."
      />
      <h5 className="card-title text-center mb-4 fw-bold">{title}</h5>
      <h6 className="card-subtitle mb-4 text-muted text-center">
        Release Date: {date}
      </h6>

      {isLoggedIn && (
        <>
          <div
            className={`${styles.content} card-body bg-light  px-3 border rounded-3`}
            style={{ "--bs-bg-opacity": ".9" }}
          >
            <p className="card-text lead m-0">{overview}</p>
          </div>

          <span
            className={`badge rounded-pill ${
              vote < 2.5
                ? "bg-danger"
                : vote <= 5
                ? "bg-warning"
                : vote <= 7.5
                ? "bg-info"
                : "bg-success"
            }`}
          >
            {vote}
          </span>
        </>
      )}
    </div>
  );
};

export default Card;
