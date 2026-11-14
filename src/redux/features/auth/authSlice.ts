import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: null | object;
  token: null | string;
}

const initialState: IAuth = {
  user: null,
  token: null,
};

const authSilce = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSilce.actions;
export default authSilce.reducer;
