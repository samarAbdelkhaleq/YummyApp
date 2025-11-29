import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRecipeState, Recipe } from '../../Types';
import { getRecipesService } from '../../services/recipeServices';

export const getSearchRecipes = createAsyncThunk(
  'searchRecipe/getSearchRecipes',
  async (query: string, thunkAPI) => {
    const response = await getRecipesService(query);
    return response;
  },
);
const initialState: SearchRecipeState = {
  searchResults: [],
  isLoading: false,
  error: null,
};
export const searchRecipeSlice = createSlice({
  name: 'searchRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchRecipes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSearchRecipes.fulfilled, (state, action: PayloadAction<{ recipes: Recipe[] }>) => {
      state.searchResults = action.payload.recipes;
      state.isLoading = false;
    });
    builder.addCase(getSearchRecipes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default searchRecipeSlice.reducer;
