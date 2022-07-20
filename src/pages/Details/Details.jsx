import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";
import useHttp from "../../hooks/useHttp";
import styles from "./Detail.module.scss";

const Details = () => {
  const { getMovieDetails } = useHttp();
  const { id } = useParams();
  const movieDetails = useSelector((state) => state.movie.movieDetails);
  console.log("wwqdd", movieDetails);
  const url = `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`;

  useEffect(() => {
    getMovieDetails(id);
  }, [getMovieDetails, id]);

  return (
    <main
      className={`d-flex ${styles.main}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className={`d-flex align-items-center ${styles.gradient}`}>
        <DetailCard info={movieDetails} />
      </div>
    </main>
  );
};

export default Details;
