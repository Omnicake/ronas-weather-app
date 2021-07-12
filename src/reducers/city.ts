import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CityState {
  name: string;
}

const initialState: CityState = {
  name: "",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCityName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setCityName } = citySlice.actions;

export default citySlice.reducer;
