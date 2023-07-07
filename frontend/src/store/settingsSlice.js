import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    value: {},
  },
  reducers: {
    addSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
