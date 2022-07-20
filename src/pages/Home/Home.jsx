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
  return (
    <main className="container mt-5">
      <div className="row ">
        {movies?.map((movie) => (
          <Card key={movie.id} info={movie} />
        ))}
      </div>
    </main>
  );
};

export default Home;
