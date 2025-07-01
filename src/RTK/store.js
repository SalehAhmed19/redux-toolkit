import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middleware/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }, // Add your reducers here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
