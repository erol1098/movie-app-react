import React from "react";
import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";
import styles from "./Detail.module.scss";
const Details = () => {
  const { state: id } = useLocation();

  const searchedMovies = useSelector((state) => state.movie.searchedQuery);
  const discoverMovies = useSelector((state) => state.movie.discover);
  const filteredFilm =
    searchedMovies.find((movie) => movie.id === id) ||
    discoverMovies.find((movie) => movie.id === id);
  const url = `https://image.tmdb.org/t/p/w500${filteredFilm?.backdrop_path}`;

  return (
    <main
      className={`d-flex ${styles.main}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className={`d-flex align-items-center ${styles.gradient}`}>
        <DetailCard info={filteredFilm} />
      </div>
    </main>
  );
};

export default Details;
