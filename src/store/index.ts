import { configureStore } from '@reduxjs/toolkit';
import searchRecipeReducer from '../features/searchRecipe/searchRecipeSlice';
import authReducer from '../features/auth/authSlice';
import RecipeDetailsReducer from '../features/recipeDetails/recipeDetailsSlice';
import addRecipeReducer from '../features/addRecipe/addRecipeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    searchRecipe: searchRecipeReducer,
    recipeDetails: RecipeDetailsReducer,
    addRecipe: addRecipeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
