import { createAsyncThunk } from "@reduxjs/toolkit";
import { keys } from "../../api/keys";

export const API_URL = "https://api.spoonacular.com/recipes";

export const fetchRandomRecipe = createAsyncThunk("fetch/randomRecipe", async () => {
  const url = `${API_URL}/random?apiKey=${keys.api}&number=10`;
  const data = await fetch(url);
  return data.json();
});

export const getRecipeInformation = createAsyncThunk("fetch/recipeInformation", async (id) => {
  const url = `${API_URL}/${id}/information?apiKey=${keys.api}`;
  const data = await fetch(url);
  return data.json();
});

export const getSearchItem = createAsyncThunk("fetch/searchItem", async (item) => {
  const url = `${API_URL}/complexSearch?query=${item}&number=20&apiKey=${keys.api}`;
  const data = await fetch(url);
  return data.json();
});
