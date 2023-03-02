import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./course/slice";
import cartReducer from "./cart/slice";

export default configureStore({
  reducer: {
    course: courseReducer,
    cart: cartReducer,
  },
});
