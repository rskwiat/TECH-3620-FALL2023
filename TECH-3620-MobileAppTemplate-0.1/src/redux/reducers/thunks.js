import { createAsyncThunk } from "@reduxjs/toolkit";
import { keys } from "../../api/keys";
export const API_URL = "https://api.spoonacular.com/recipes";

export const fetchRandomRecipe = createAsyncThunk("fetch/RandomRecipe", async () => {
  const url = `${API_URL}/random?apiKey=${keys.api}&number=10`;
  const data = await fetch(url);
  const res = data.json();
  return res;
});
