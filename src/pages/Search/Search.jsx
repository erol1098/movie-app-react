import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useLocation } from "react-router-dom";
import useSort from "../../hooks/useSort";
import Sort from "../../components/Sort/Sort";

const Search = () => {
  const movies = useSelector((state) => state.movie.searchedQuery);
  const [sortedList, setSortedList] = useState(movies);

  const { searchMovies } = useHttp();
  const { state: query } = useLocation();

  const sortKey = useSelector((state) => state.movie.sortKey);
  const { sorting } = useSort();
  useEffect(() => {
    searchMovies(query);
  }, [searchMovies, query]);
  useEffect(() => {
    setSortedList(() => sorting(movies));
  }, [sortKey, movies]);

  return (
    <main className="container mt-5">
      <Sort />
      <div className="row">
        {sortedList?.map((movie) => (
          <Card key={movie.id} info={movie} />
        ))}
      </div>
    </main>
  );
};

export default Search;
