import React from 'react';

import Equipment from '../components/equipment/equipment';
import { createNavigationOptions } from './config';

export default {
  screen: Equipment,
  navigationOptions: createNavigationOptions({
    title: 'Equipment',
  }),
};
