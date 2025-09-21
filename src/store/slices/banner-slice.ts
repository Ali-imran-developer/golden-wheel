import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  bannersList: any[];
};

const initialState: initialStateType = {
  bannersList: [],
};

export const BannerSlice = createSlice({
  name: "BannerSlice",
  initialState,
  reducers: {
    setBanners: (state, action: PayloadAction<any>) => {
      state.bannersList = action.payload.data;
    },
  },
});

export const { setBanners } = BannerSlice.actions;
export default BannerSlice.reducer;