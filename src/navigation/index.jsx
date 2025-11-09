import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchRecipe from '../screens/searchRecipe';
import SplashScreen from '../screens/splash';
import RecipeDetails from '../screens/recipeDetails';
import AddRecipe from '../screens/addRecipe';

const RootStack = createNativeStackNavigator({
  screens: {
    Splash: {
      screen: SplashScreen,
      options: { headerShown: false },
    },
    Search: {
      screen: SearchRecipe,
      options: { headerShown: false },
    },
     RecipeDetails: {
       screen: RecipeDetails,
       options: { title: 'Recipe Details',headerBackTitle: 'Back'},
    },
      AddRecipe: {
       screen: AddRecipe,
       options: { title: 'Add Recipe',headerBackTitle: 'Back'},
    },
   
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;