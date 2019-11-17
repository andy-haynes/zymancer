import React from 'react';

import Brew from '../components/brew';
import { createNavigationOptions } from './config';

export default {
  screen: Brew,
  navigationOptions: createNavigationOptions({
    title: 'Brew',
  }),
};
