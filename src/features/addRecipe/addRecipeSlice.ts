import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe, NewRecipe, AddRecipeState } from '../../Types';
import { addRecipeService, getRecipesService } from '../../services/recipeServices';

export const addNewRecipe = createAsyncThunk('addRecipe/addNewRecipe', async (data: NewRecipe, thunkAPI) => {
  const response = await addRecipeService(data);

  return response;
});
const initialState: AddRecipeState = {
  status: null,
  isLoading: false,
  error: null,
};
export const addRecipeSlice = createSlice({
  name: 'addRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewRecipe.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addNewRecipe.fulfilled, (state) => {
      state.status = 'success';
      state.isLoading = false;
    });
    builder.addCase(addNewRecipe.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
      state.status = 'error';
    });
  },
});

export default addRecipeSlice.reducer;
