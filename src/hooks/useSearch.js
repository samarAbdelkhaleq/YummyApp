import { useState } from 'react';
import { getRecipesService } from '../services';
import { useNavigation } from '@react-navigation/native';
const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const getSearchResults = async () => {
    const results = await getRecipesService(searchQuery);
    setSearchResults(results?.recipes || []);
  };
  const OnAddRecipePress = () => {
    navigation.navigate('AddRecipe');
  };
  const OnSelectRecipe = (recipeId) => {
    navigation.navigate('RecipeDetails', { recipeId });
  };
  return {
    searchQuery,
    setSearchQuery,
    getSearchResults,
    searchResults,
    OnAddRecipePress,
    OnSelectRecipe,
  };
};

export default useSearch;
