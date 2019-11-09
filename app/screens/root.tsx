import React from 'react';

import RootMenu from '../components/navigation/root_menu';
import { createNavigationOptions } from './config';

export default {
  screen: RootMenu,
  navigationOptions: createNavigationOptions({
    title: 'zymancer',
  }),
};
