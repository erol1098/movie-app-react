import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movie-slice";
const useHttp = () => {
  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchMovies = useCallback(
    async (query) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        dispatch(movieActions.setSearchedQuery(data.results));
      } catch (error) {
        console.log(error);
      }
    },
    [API_KEY, dispatch]
  );
  const getMovieDetails = useCallback(
    async (id) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );

        dispatch(movieActions.setMovieDetails(data));
      } catch (error) {
        console.log(error);
      }
    },
    [API_KEY, dispatch]
  );
  const discoverMovies = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );
      dispatch(movieActions.setDiscover(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [API_KEY, dispatch]);
  return { searchMovies, getMovieDetails, discoverMovies };
};

export default useHttp;
