import { ScreenName } from '../constants/navigation';
import NavigationService from '../services/navigation';

type Navigator = {
  navigateToScreen: (screen: ScreenName) => void
};

export function useNavigator(): Navigator {
  return {
    navigateToScreen: (screen: ScreenName) => NavigationService.navigate(screen),
  };
}
