import { createSlice } from "@reduxjs/toolkit";

interface WelcomeState {
  tournamentsData: any[];
}

const initialState: WelcomeState = {
  tournamentsData: [],
};

const TournamentSlice = createSlice({
  name: "TournamentSlice",
  initialState,
  reducers: {
    setTournamentsData: (state, action) => {
      state.tournamentsData = action.payload;
    },
  },
});

export const { setTournamentsData } = TournamentSlice.actions;
export default TournamentSlice.reducer;