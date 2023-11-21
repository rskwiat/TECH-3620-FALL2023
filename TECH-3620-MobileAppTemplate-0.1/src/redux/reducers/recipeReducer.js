import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomRecipe, getRecipeInformation } from "./thunks";

const initialState = {
  loading: true,
  data: [],
  favorites: [],
  errors: "",
  selectedRecipe: {}
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const id = state.favorites.map(item => item.id).includes(action.payload.id);
      if (!id) {
        state.favorites.push(action.payload)
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites.splice(action.payload.id, 1);
    },
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

    builder.addCase(getRecipeInformation.fulfilled,(state, action) => {
      state.selectedRecipe = action.payload;
    });
  }
});

export const { addToFavorites, removeFromFavorites } = recipesSlice.actions;

export default recipesSlice.reducer;
