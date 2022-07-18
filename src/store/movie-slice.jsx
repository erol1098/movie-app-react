import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    searchedQuery: [],
    movieDetails: [],
    discover: [],
  },
  reducers: {
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload;
    },
    setMovieDetails(state, action) {
      state.movieDetails = action.payload;
    },
    setDiscover(state, action) {
      state.discover = action.payload;
    },
  },
});
export const movieActions = movieSlice.actions;
export default movieSlice;
