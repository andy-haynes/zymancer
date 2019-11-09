import React from 'react';

import Recipes from '../components/recipe/recipes';
import { createNavigationOptions } from './config';

export default {
  screen: Recipes,
  navigationOptions: createNavigationOptions({
    title: 'Recipes',
  }),
};
