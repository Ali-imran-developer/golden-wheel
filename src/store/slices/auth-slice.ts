import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  user: any
};

const initialState: initialStateType = {
  user: {},
};

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;