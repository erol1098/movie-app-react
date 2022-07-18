import React, { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useLocation } from "react-router-dom";
const Search = () => {
  const { searchMovies } = useHttp();
  const { state: query } = useLocation();

  //? Search Movies
  const movies = useSelector((state) => state.movie.searchedQuery);

  useEffect(() => {
    searchMovies(query);
  }, [searchMovies, query]);

  return (
    <main className="d-flex flex-wrap gap-3">
      {movies?.map((movie) => (
        <Card key={movie.id} info={movie} />
      ))}
    </main>
  );
};

export default Search;
