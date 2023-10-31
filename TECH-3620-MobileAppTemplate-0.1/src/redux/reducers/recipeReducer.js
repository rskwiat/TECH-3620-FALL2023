import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomRecipe } from "./thunks";

const initialState = {
  loading: true,
  data: [],
  favorites: [],
  errors: "",
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomRecipe.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRandomRecipe.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(fetchRandomRecipe.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  }
});

export const {} = recipesSlice.actions;

export default recipesSlice.reducer;
