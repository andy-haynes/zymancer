import { useNavigation } from '@react-navigation/native';

import { ScreenName } from '../constants/navigation';

type BrewInstanceScreenParams = {
  brewInstanceId: string;
};

type FermentScreenParams = {
  fermentId: string;
};

type FermentationVesselScreenParams = {
  fermentationVesselId: string;
};

type RecipeScreenParams = {
  recipeId: string;
};

type Navigator = {
  navigateToBrewInstance: (params: BrewInstanceScreenParams) => void;
  navigateToFerment: (params: FermentScreenParams) => void;
  navigateToFermentationVessel: (params: FermentationVesselScreenParams) => void;
  navigateToRecipe: (params: RecipeScreenParams) => void;
  navigateToScreen: (screen: ScreenName, params?: any) => void;
};

export function useNavigator(): Navigator {
  const navigation = useNavigation();
  return {
    navigateToBrewInstance: (params: BrewInstanceScreenParams) => navigation.navigate(ScreenName.BrewInstance, params),
    navigateToFerment: (params: FermentScreenParams) => navigation.navigate(ScreenName.Ferment, params),
    navigateToFermentationVessel: (params: FermentationVesselScreenParams) => navigation.navigate(ScreenName.FermentationVessel, params),
    navigateToRecipe: (params: RecipeScreenParams) => navigation.navigate(ScreenName.Recipe, params),
    navigateToScreen: (screen: ScreenName, params?: any) => navigation.navigate(screen, params),
  };
}
