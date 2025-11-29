import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchRecipe from '../features/searchRecipe/screens/searchRecipe';
import SplashScreen from '../screens/splash';
import RecipeDetails from '../features/recipeDetails/screens/recipeDetails';
import AddRecipe from '../features/addRecipe/screens/addRecipe';
import Login from '../features/auth/screens/login';
import Tabs from './tabs';

const RootStack = createNativeStackNavigator({
  screens: {
    Splash: {
      screen: SplashScreen,
      options: { headerShown: false },
    },
    Login: {
      screen: Login,
      options: { headerShown: false },
    },
    BottomTabs: {
      screen: Tabs,
      options: { headerShown: false },
    },
    RecipeDetails: {
      screen: RecipeDetails,
      options: { title: 'Recipe Details', headerBackTitle: 'Back' },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;
