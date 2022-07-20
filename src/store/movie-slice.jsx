import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    searchedQuery: [],
    movieDetails: [],
    discover: [],
    sortKey: "pa",
  },
  reducers: {
    setSortKey(state, action) {
      state.sortKey = action.payload;
    },
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
