import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NavigationService from '../services/navigation';
import Equipment from './equipment';
import HeaderMenuButton from './header_menu_button';
import RootMenu from './root_menu';

const navigator = createStackNavigator({
  Root: {
    screen: RootMenu,
    navigationOptions: () => ({
      title: 'Zymancer',
      headerRight: <HeaderMenuButton />,
    }),
  },
  Equipment: {
    screen: Equipment,
    navigationOptions: () => ({
      title: 'Equipment',
      headerRight: <HeaderMenuButton />,
    }),
  },
});

// tslint:disable-next-line:variable-name
const AppContainer = createAppContainer(navigator);

export default function Navigation() {
  return (
    <AppContainer
      ref={NavigationService.setTopLevelNavigator}
    />
  );
}
