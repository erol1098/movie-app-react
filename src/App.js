import React, { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
// import styles from "./App.module.css"
// import useHttp from "./hooks/useHttp";
// import { useSelector } from "react-redux";
const App = () => {
  // const { searchMovies, getMovieDetails, discoverMovies } = useHttp();
  //? Search Movies
  // const results = useSelector((state) => state.movie.searchedQuery);
  // useEffect(() => {
  //   searchMovies("car");
  // }, [searchMovies]);
  // console.log(results);

  //? Movie Details
  // const result = useSelector((state) => state.movie.movieDetails);
  // useEffect(() => {
  //   getMovieDetails(573560);
  // }, [getMovieDetails]);
  // console.log(result);

  //? Discover Page
  // const result = useSelector((state) => state.movie.discover);
  // useEffect(() => {
  //   discoverMovies();
  // }, [discoverMovies]);
  // console.log(result);

  return <AppRouter>App</AppRouter>;
};

export default App;
