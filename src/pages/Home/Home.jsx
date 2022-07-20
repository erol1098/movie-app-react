import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import useHttp from "../../hooks/useHttp";

import useSort from "../../hooks/useSort";

const Home = () => {
  const movies = useSelector((state) => state.movie.discover);
  const [sortedList, setSortedList] = useState(movies);
  const { discoverMovies } = useHttp();
  const sortKey = useSelector((state) => state.movie.sortKey);
  const { sorting } = useSort();
  useEffect(() => {
    discoverMovies();
  }, [discoverMovies]);

  useEffect(() => {
    setSortedList(() => sorting(movies));
    console.log(sortedList);
  }, [sortKey]);

  return (
    <main className="container mt-5">
      <div className="row ">
        {sortedList?.map((movie) => (
          <Card key={movie.id} info={movie} />
        ))}
      </div>
    </main>
  );
};

export default Home;
