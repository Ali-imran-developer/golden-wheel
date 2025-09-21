import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./auth-slice";
import blogsReducer from "./blog-slice";
import bannersReducer from "./banner-slice";
import gamesReducer from "./games-slice";

const rootReducer = combineReducers({
  User: userReducer,
  Blogs: blogsReducer,
  Banners: bannersReducer,
  Games: gamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;