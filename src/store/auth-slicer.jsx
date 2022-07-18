import { createSlice } from "@reduxjs/toolkit";
const authSlicer = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem(
        "willExpire",
        new Date().getTime() + +action.payload.expire * 1000
      );
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("willExpire");
      localStorage.removeItem("savedList");
    },
  },
});
export const authActions = authSlicer.actions;
export default authSlicer;
