import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  blogsList: any[];
  blogDetails: {};
};

const initialState: initialStateType = {
  blogsList: [],
  blogDetails: null,
};

export const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<any>) => {
      state.blogsList = action.payload.data;
    },
    setBlogDetail: (state, action: PayloadAction<any>) => {
      state.blogDetails = action.payload;
    },
  },
});

export const { setBlogs, setBlogDetail } = BlogSlice.actions;
export default BlogSlice.reducer;