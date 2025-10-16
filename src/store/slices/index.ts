import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./auth-slice";
import blogsReducer from "./blog-slice";
import bannersReducer from "./banner-slice";
import gamesReducer from "./games-slice";
import welcomeReducer from "./welcome-slice";
import sportsReducer from "./sports-slice";
import tournamentsReducer from "./tournaments-slice";

const rootReducer = combineReducers({
  User: userReducer,
  Blogs: blogsReducer,
  Banners: bannersReducer,
  Games: gamesReducer,
  Welcome: welcomeReducer,
  Sports: sportsReducer,
  Tournaments: tournamentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;