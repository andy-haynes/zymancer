import { ScreenName } from '../constants/navigation';
import Screen from '../screens';

export default {
    [ScreenName.Root]: Screen.Root,
    [ScreenName.Recipes]: Screen.Recipes,
    [ScreenName.Equipment]: Screen.Equipment,
    [ScreenName.Brew]: Screen.Brew,
    [ScreenName.NotImplemented]: Screen.NotImplemented,
  };
