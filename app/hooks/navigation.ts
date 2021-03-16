import { useNavigation } from '@react-navigation/native';

import { ScreenName } from '../constants/navigation';

type Navigator = {
  navigateToRecipe: (params: RecipeScreenParams) => void;
  navigateToScreen: (screen: ScreenName, params?: any) => void;
};

type RecipeScreenParams = {
  recipeId: string;
};

export function useNavigator(): Navigator {
  const navigation = useNavigation();
  return {
    navigateToRecipe: (params: RecipeScreenParams) => navigation.navigate(ScreenName.Recipe, params),
    navigateToScreen: (screen: ScreenName, params?: any) => navigation.navigate(screen, params),
  };
}
