import { configureStore } from "@reduxjs/toolkit";
import Countereducer from "./counter/couterSlice";
export const store = configureStore({
  reducer: {
    counter: Countereducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
