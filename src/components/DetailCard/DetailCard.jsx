import React from "react";
import styles from "./DetailCard.module.scss";
const DetailCard = ({ info }) => {
  const {
    original_title: title,
    release_date: date,
    vote_average: rating,
    overview,
    tagline,
    genres,
    production_countries: countries,
  } = info;
  return (
    <div
      className={`card ${styles.card} my-3 px-1 px-sm-4 text-start border-0`}
    >
      <div className="card-body">
        <h5 className="card-title mb-5 fw-bold">{tagline}</h5>
        <h5 className="card-title display-6 mb-5 fw-bold">{title}</h5>
        <h6 className="card-subtitle text-secondary mb-3">
          <span>{`${new Date(date).getFullYear()}  |  `}</span>
          <span className="badge text-bg-secondary">{rating?.toFixed(1)}</span>
          {genres?.map((genre, i) => (
            <span key={i}>{`  |  ${genre?.name}  |  `}</span>
          ))}
        </h6>
        <h6 className="card-subtitle text-secondary mb-3">
          {countries?.map((country, i) => (
            <span key={i}>{`${country?.name} `}</span>
          ))}
        </h6>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

export default DetailCard;
