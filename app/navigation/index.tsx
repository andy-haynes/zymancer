import React from 'react';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NavigationService from '../services/navigation';
import screens from './screens';

const createNavigator = () => createStackNavigator(screens);

const appContainerRef = (navRef: NavigationContainerComponent) =>
  NavigationService.setTopLevelNavigator(navRef);

export function AppContainer() {
  // tslint:disable-next-line:variable-name
  const AppNavigationContainer = createAppContainer(createNavigator());

  return (
    <AppNavigationContainer
      ref={appContainerRef}
    />
  );
}
