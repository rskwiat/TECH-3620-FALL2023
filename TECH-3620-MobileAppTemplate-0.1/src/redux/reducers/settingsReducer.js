import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: {}
};

export const SettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    }
  },
});

export const { setTheme } = SettingsSlice.actions;

export default SettingsSlice.reducer;
