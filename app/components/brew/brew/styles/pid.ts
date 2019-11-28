import { StyleSheet } from 'react-native';

import Colors from '../../../../theme/colors';

export default StyleSheet.create({
  temperatureDeltaText: {
    color: Colors.offWhite,
  },
  temperatureInsideRange: {
    backgroundColor: Colors.green,
  },
  temperatureOutsideRange: {
    backgroundColor: Colors.red,
  },
  temperatureRangeWarning: {
    backgroundColor: Colors.yellow,
  },
});
