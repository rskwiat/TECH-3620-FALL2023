import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/recipeReducer";
import settingsReducer from "./reducers/settingsReducer";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    settings: settingsReducer
  }
});
