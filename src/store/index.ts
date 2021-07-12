import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../reducers/city";
import optionsReducer from "../reducers/options";
import weatherReducer from "../reducers/weather";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    options: optionsReducer,
    weatherInfo: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
