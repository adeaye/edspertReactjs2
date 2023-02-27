import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./course//slice";

export default configureStore({
  reducer: {
    course: courseReducer,
  },
});
