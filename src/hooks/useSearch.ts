import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchRecipes } from '../features/searchRecipe/searchRecipeSlice';
import type { AppDispatch } from '../store';
import { searchRecipe, selectSearchResults } from '../selectors/recipeSelector';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../Types';
import { setSelectedRecipeId } from '../features/recipeDetails/recipeDetailsSlice';

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchResults = useSelector(selectSearchResults);
  const isLoading = useSelector(searchRecipe).isLoading;
  const error = useSelector(searchRecipe).error;
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const dispatch: AppDispatch = useDispatch();

  const getSearchResults = async () => {
    await dispatch(getSearchRecipes(searchQuery));
  };
  const OnAddRecipePress = () => {
    navigation.navigate('AddRecipe');
  };
  const OnSelectRecipe = (recipeId: number) => {
    dispatch(setSelectedRecipeId(recipeId));
    navigation.navigate('RecipeDetails');
  };
  return {
    searchQuery,
    setSearchQuery,
    getSearchResults,
    searchResults,
    OnAddRecipePress,
    OnSelectRecipe,
    isLoading,
    error,
  };
};

export default useSearch;
