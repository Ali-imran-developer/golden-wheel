import { createSlice } from "@reduxjs/toolkit";

interface WelcomeState {
  sportsData: any[];
}

const initialState: WelcomeState = {
  sportsData: [],
};

const SportSlice = createSlice({
  name: "SportSlice",
  initialState,
  reducers: {
    setSportsData: (state, action) => {
      state.sportsData = action.payload;
    },
  },
});

export const { setSportsData } = SportSlice.actions;
export default SportSlice.reducer;