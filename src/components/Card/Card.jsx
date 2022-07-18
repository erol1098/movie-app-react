import React from "react";
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
      className="card pointer"
      style={{ width: "18rem" }}
      onClick={() => navigate(`/details/:${id}`, { state: id })}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${url}`}
        className="card-img-top"
        alt="..."
      />
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
      <div className="card-body">
        <p className="card-text">{overview}</p>
        <p>{vote}</p>
      </div>
    </div>
  );
};

export default Card;
