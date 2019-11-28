import { StyleSheet } from 'react-native';

import Colors from '../../../../theme/colors';

export default StyleSheet.create({
  temperatureOutsideRange: {
    backgroundColor: Colors.red,
  },
  temperatureInsideRange: {
    backgroundColor: Colors.green,
  },
  temperatureDeltaText: {
    color: Colors.offWhite,
  },
});
