import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OptionsState {
  measureUnits: "celsius" | "fahrenheit";
}

const initialState: OptionsState = {
  measureUnits: "celsius",
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    toggleMeasureUnits: (
      state,
      action: PayloadAction<"celsius" | "fahrenheit">
    ) => {
      state.measureUnits = action.payload;
    },
  },
});

export const { toggleMeasureUnits } = optionsSlice.actions;

export default optionsSlice.reducer;
