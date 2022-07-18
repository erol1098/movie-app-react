import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import useHttp from "../../hooks/useHttp";

const Home = () => {
  const { discoverMovies } = useHttp();
  useEffect(() => {
    discoverMovies();
  }, [discoverMovies]);

  const movies = useSelector((state) => state.movie.discover);
  console.log(movies);
  return (
    <main className="container d-flex flex-wrap gap-3 justify-content-center mt-5">
      {movies?.map((movie) => (
        <Card key={movie.id} info={movie} />
      ))}
    </main>
  );
};

export default Home;
