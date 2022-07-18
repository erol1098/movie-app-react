import React from "react";
import styles from "./DetailCard.module.scss";
const DetailCard = ({ info }) => {
  const {
    original_title: title,
    release_date: date,
    vote_average: rating,
    overview,
  } = info;
  return (
    <div className={`card ${styles.card} ms-5 text-start`}>
      <div className="card-body">
        <h5 className="card-title display-6 mb-5 fw-bold">{title}</h5>
        <h6 class="card-subtitle text-secondary mb-3">
          {`${new Date(date).getFullYear()} | `}
          <span class="badge text-bg-secondary">{rating}</span>
        </h6>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

export default DetailCard;
