import { StyleSheet } from 'react-native';

import Colors from '../../../../theme/colors';

export default StyleSheet.create({
  relayOff: {
    backgroundColor: Colors.red,
  },
  relayOn: {
    backgroundColor: Colors.green,
  },
  relayPin: {
    color: Colors.offWhite,
  },
  relayState: {
    color: Colors.offWhite,
    fontSize: 60,
    textAlign: 'center',
  },
});
