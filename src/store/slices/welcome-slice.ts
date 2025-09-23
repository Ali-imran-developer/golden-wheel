import { createSlice } from "@reduxjs/toolkit";

interface WelcomeState {
  welcomeData: any | null;
}

const initialState: WelcomeState = {
  welcomeData: null,
};

const welcomeSlice = createSlice({
  name: "Welcome",
  initialState,
  reducers: {
    setWelcomeData: (state, action) => {
      state.welcomeData = action.payload;
    },
    clearWelcomeData: (state) => {
      state.welcomeData = null;
    },
  },
});

export const { setWelcomeData, clearWelcomeData } = welcomeSlice.actions;
export default welcomeSlice.reducer;
