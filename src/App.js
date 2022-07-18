import React from "react";
import AppRouter from "./routes/AppRouter";
// import styles from "./App.module.css"

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

  return <AppRouter />;
};

export default App;
