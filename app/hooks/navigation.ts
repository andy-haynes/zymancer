import { useNavigation } from '@react-navigation/native';

import { ScreenName } from '../constants/navigation';

type Navigator = {
  navigateToScreen: (screen: ScreenName, params?: any) => void
};

export function useNavigator(): Navigator {
  const navigation = useNavigation();
  return {
    navigateToScreen: (screen: ScreenName, params?: any) => navigation.navigate(screen, params),
  };
}
