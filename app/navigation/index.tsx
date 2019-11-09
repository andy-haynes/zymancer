import React from 'react';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { ScreenName } from '../constants/navigation';
import Screen from '../screens';
import NavigationService from '../services/navigation';

const createNavigator = () =>
  createStackNavigator({
    [ScreenName.Root]: Screen.Root,
    [ScreenName.Recipes]: Screen.Recipes,
    [ScreenName.Equipment]: Screen.Equipment,
  });

const appContainerRef = (navRef: NavigationContainerComponent) =>
  NavigationService.setTopLevelNavigator(navRef);

export function AppContainer(/* props: NavigationProps */) {
  // tslint:disable-next-line:variable-name
  const AppNavigationContainer = createAppContainer(createNavigator());

  return (
    <AppNavigationContainer
      ref={appContainerRef}
    />
  );
}
