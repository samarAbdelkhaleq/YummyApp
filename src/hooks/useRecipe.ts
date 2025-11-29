import { useDispatch, useSelector } from 'react-redux';
import { recipeAdded, selectedRecipeId } from '../selectors/recipeSelector';
import { AppDispatch } from '../store';
import { getRecipeDetails } from '../features/recipeDetails/recipeDetailsSlice';
import { NewRecipe, RootParamList } from '../Types';
import { addNewRecipe } from '../features/addRecipe/addRecipeSlice';

const useRecipe = () => {
  const recipeId = useSelector(selectedRecipeId);
  const isAdded = useSelector(recipeAdded).status;
  const isLoadingAdd = useSelector(recipeAdded).isLoading;

  const dispatch: AppDispatch = useDispatch();

  const getDetails = async () => {
    if (!recipeId) return;
    dispatch(getRecipeDetails(recipeId));
  };
  const onAddNewRecipe = (data: NewRecipe) => {
    if (!data) return;
    dispatch(addNewRecipe(data));
  };

  return {
    getDetails,
    onAddNewRecipe,
    isLoadingAdd,
    isAdded,
  };
};

export default useRecipe;
