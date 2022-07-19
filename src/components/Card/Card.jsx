import React from "react";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
const Card = ({ info }) => {
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
      className={`${styles.card} card pointer col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4`}
      onClick={() => navigate(`/details/:${id}`, { state: id })}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${url}`}
        className="card-img-top mt-4 mb-3 img-thumbnail border rounded-5"
        alt="..."
      />
      <h5 className="card-title text-center mb-4 fw-bold">{title}</h5>
      <h6 className="card-subtitle mb-3 text-muted text-center">
        Release Date: {date}
      </h6>

      <div
        className={`${styles.content} card-body bg-light px-3 border rounded-3`}
      >
        <p className="card-text lead m-0 ">{overview}</p>
      </div>

      <span className="badge rounded-pill bg-danger">{vote}</span>
    </div>
  );
};

export default Card;
