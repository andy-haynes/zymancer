import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import RootMenu from './root_menu';
import HeaderMenuButton from './header_menu_button';

const navigator = createStackNavigator({
  Root: {
    screen: RootMenu,
    navigationOptions: () => ({
      title: 'Zymancer',
      headerRight: <HeaderMenuButton />,
    }),
  },
});

export default createAppContainer(navigator);
