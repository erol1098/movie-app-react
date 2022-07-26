import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Sort from '../../components/Sort/Sort';
import useHttp from '../../hooks/useHttp';
import useSort from '../../hooks/useSort';

const Home = () => {
  const movies = useSelector((state) => state.movie.discover);
  const [sortedList, setSortedList] = useState();
  const { discoverMovies } = useHttp();
  const sortKey = useSelector((state) => state.movie.sortKey);
  const { sorting } = useSort();
  useEffect(() => {
    discoverMovies();
  }, [discoverMovies]);

  useEffect(() => {
    setSortedList(() => sorting(movies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortKey, movies]);

  return (
    <main className='container mt-5 '>
      <Sort />
      <div className='row mx-3'>
        {sortedList &&
          sortedList.map((movie) => <Card key={movie.id} info={movie} />)}
      </div>
    </main>
  );
};

export default Home;
