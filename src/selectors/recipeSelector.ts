import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectSearchRecipeState = (state: RootState) => state.searchRecipe;

export const searchRecipe = (state: RootState) => state.searchRecipe;
export const selectSearchResults = createSelector(
  [selectSearchRecipeState],
  (searchRecipe) => searchRecipe.searchResults,
);
export const selectedRecipeId = (state: RootState) => state.recipeDetails.selectedRecipeId;
export const recipeDetails = (state: RootState) => state.recipeDetails.details;
export const recipeAdded = (state: RootState) => state.addRecipe;
