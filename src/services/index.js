import axios from 'axios';
const BASE_URL = 'https://dummyjson.com/';
export const getRecipesService = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/search?q=${query}`);
    return response?.data;
  } catch (e) {
    throw e;
  }
};

export const getRecipeDetailsService = async (recipeId) => {
  try {
    const response = await axios.get(`${BASE_URL}recipe/${recipeId}`);
    return response?.data;
  } catch (e) {
    throw e;
  }
};
