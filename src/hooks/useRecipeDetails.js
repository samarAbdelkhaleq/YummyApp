import { useState } from 'react';
import { getRecipeDetailsService } from '../services';

const useRecipeDetails = ({ recipeId }) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const getDetails = async () => {
    const results = await getRecipeDetailsService(recipeId);
    setRecipeDetails(results || {});
  };

  return {
    getDetails,
    recipeDetails,
  };
};

export default useRecipeDetails;
