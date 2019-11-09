import React from 'react';
import { NavigationScreenConfig } from 'react-navigation';

import HeaderMenuButton from '../components/header/menu_button';

export const createNavigationOptions = (options: any):
  () => NavigationScreenConfig<any, any> =>
    () => ({
      headerRight: <HeaderMenuButton />,
      ...options,
    });
