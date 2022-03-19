import restaurantSlice from "./restaurantSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    restaurantSlice: restaurantSlice,
  },
});
