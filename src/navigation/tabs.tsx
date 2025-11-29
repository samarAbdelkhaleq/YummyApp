import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchRecipe from '../features/searchRecipe/screens/searchRecipe';
import AddRecipe from '../features/addRecipe/screens/addRecipe';
import { COLORS } from '../components/colors';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Profile from '../features/auth/screens/profile';
const Tab = createBottomTabNavigator();

const ICONS: { [key: string]: string } = {
  Search: 'search-outline',
  Add: 'add-circle-outline',
  Profile: 'person-outline',
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarIcon: (options) => (
          <Ionicons name={ICONS[name]} size={25} color={options.focused ? COLORS.primary : COLORS.black} />
        ),
      })}
    >
      <Tab.Screen name="Search" component={SearchRecipe} />
      <Tab.Screen name="Add" component={AddRecipe} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
