import React from 'react';
import { createAppContainer, NavigationContainerComponent } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NavigationService from '../../services/navigation';
import Equipment from '../equipment/equipment';
import HeaderMenuButton from './header_menu_button';
import Recipes from '../recipe/recipes';
import RootMenu from './root_menu';

const navigator = createStackNavigator({
  Root: {
    screen: RootMenu,
    navigationOptions: () => ({
      title: 'Zymancer',
      headerRight: <HeaderMenuButton />,
    }),
  },
  Recipes: {
    screen: Recipes,
    navigationOptions: () => ({
      title: 'Recipes',
      headerRight: <HeaderMenuButton/>,
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
      ref={(navRef: NavigationContainerComponent) => NavigationService.setTopLevelNavigator(navRef)}
    />
  );
}
