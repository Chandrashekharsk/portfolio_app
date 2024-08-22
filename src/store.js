import { configureStore } from "@reduxjs/toolkit";
import  themeReducer from "./slices/themeSlice.js";
import userReducer from "./slices/userSlice.js"

const store = configureStore({
  reducer:{
    theme : themeReducer,
    user: userReducer,
  }
});

export default store;