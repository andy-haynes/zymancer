import React from 'react';

import Recipe from '../components/recipe/recipe';
import { createNavigationOptions } from './config';

export default {
  screen: Recipe,
  navigationOptions: createNavigationOptions({
    title: 'Recipe',
  }),
};
