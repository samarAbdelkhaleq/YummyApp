import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe, RecipeDetailsState } from '../../Types';
import { getRecipeDetailsService } from '../../services/recipeServices';

export const getRecipeDetails = createAsyncThunk(
  'recipeDetails/getRecipeDetails',
  async (recipeId: number, thunkAPI) => {
    const response = await getRecipeDetailsService(recipeId);
    return response;
  },
);
const initialState: RecipeDetailsState = {
  details: null,
  selectedRecipeId: null,
  isLoading: false,
  error: null,
};
export const RecipeDetailsSlice = createSlice({
  name: 'recipeDetails',
  initialState,
  reducers: {
    setSelectedRecipeId(state, action: PayloadAction<number>) {
      state.selectedRecipeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipeDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getRecipeDetails.fulfilled, (state, action: PayloadAction<Recipe>) => {
      state.details = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getRecipeDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { setSelectedRecipeId } = RecipeDetailsSlice.actions;

export default RecipeDetailsSlice.reducer;
