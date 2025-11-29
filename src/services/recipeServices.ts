import { NewRecipe } from '../Types';
import client from './client';

export const getRecipesService = async (query: string) => {
  try {
    const response = await client.get(`recipes/search?q=${query}`);
    return response?.data;
  } catch (e) {
    throw e;
  }
};

export const getRecipeDetailsService = async (recipeId: number) => {
  try {
    const response = await client.get(`recipe/${recipeId}`);
    return response?.data;
  } catch (e) {
    throw e;
  }
};

export const addRecipeService = async (data: NewRecipe) => {
  try {
    const response = await client.post('recipes/add', data);
    return response?.data;
  } catch (e) {
    throw e;
  }
};
