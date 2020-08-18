import { ScreenName } from '../constants/navigation';
import NavigationService from '../services/navigation';

type Navigator = {
  navigateToScreen: (screen: ScreenName, params?: any) => void
};

export function useNavigator(): Navigator {
  return {
    navigateToScreen: (screen: ScreenName, params?: any) => NavigationService.navigate(screen, params),
  };
}
