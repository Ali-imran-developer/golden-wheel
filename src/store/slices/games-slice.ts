import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  gamesList: any[];
};

const initialState: initialStateType = {
  gamesList: [],
};

export const GameSlice = createSlice({
  name: "GameSlice",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<any>) => {
      state.gamesList = action.payload;
    },
  },
});

export const { setGames } = GameSlice.actions;
export default GameSlice.reducer;