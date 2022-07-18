import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./auth-slicer";
import movieSlice from "./movie-slice";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    auth: authSlicer.reducer,
  },
});
export default store;
