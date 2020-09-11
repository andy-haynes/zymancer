import _ from 'lodash';
import { StyleSheet } from 'react-native';

import { getHeight } from '../../../../utils/dimensions';

export default StyleSheet.create({
  chart: {
    alignItems: 'center',
    height: _.round(getHeight() * 0.35),
    position: 'relative',
    top: -64,
  },
});
