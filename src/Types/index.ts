export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  image: string;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  rating: number;
  reviewCount: number;
  mealType: string[];
};
export interface SearchRecipeState {
  searchResults: Recipe[];
  isLoading: boolean;
  error: string | null;
}

export type RootParamList = {
  Splash: undefined;
  Search: undefined;
  RecipeDetails: undefined;
  BottomTabs: undefined;
  AddRecipe: undefined;
  Login: undefined;
};
export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}
export interface AuthState {
  userInfo: User | null;
  isLoading: boolean;
  error: string | null;
}
export interface RecipeDetailsState {
  details: Recipe | null;
  selectedRecipeId: number | null;
  isLoading: boolean;
  error: string | null;
}
export interface AddRecipeState {
  isLoading: boolean;
  error: string | null;
  status: 'success' | 'error' | null;
}
export interface NewRecipe {
  name: string;
  ingredients: string;
  instructions: string;
}
