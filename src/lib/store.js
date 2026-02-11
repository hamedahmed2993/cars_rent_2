import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/couter/counterSlice";
import filtersReducer from "./features/filters/filtersSlice";
import uiReducer from "./features/ui/uiSlice";
import carsReducer from "./features/cars/carsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filtersReducer,
    ui: uiReducer,
    cars: carsReducer,
  },
});
