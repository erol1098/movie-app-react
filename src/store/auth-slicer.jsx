import { createSlice } from "@reduxjs/toolkit";
const authSlicer = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    // setIsLoggedIn(state, action) {
    //   state.isLoggedIn = !!action.payload;
    // },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
export const authActions = authSlicer.actions;
export default authSlicer;
