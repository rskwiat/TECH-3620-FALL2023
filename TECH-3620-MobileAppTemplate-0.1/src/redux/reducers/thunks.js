import { createAsyncThunk } from "@reduxjs/toolkit";
import { keys } from "../../api/keys";

export const API_URL = "https://api.spoonacular.com/recipes";

export const fetchRandomRecipe = createAsyncThunk("fetch/randomRecipe", async () => {
  const url = `${API_URL}/random?apiKey=${keys.api}&number=10`;
  const data = await fetch(url);
  return data.json();
});
