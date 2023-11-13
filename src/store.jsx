import { configureStore } from "@reduxjs/toolkit";
import TourSlice from "./slices/TourSlice";

export const store = configureStore({
  reducer: {
    cart: TourSlice,
  },
});
