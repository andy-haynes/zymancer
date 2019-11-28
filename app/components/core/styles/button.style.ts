import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.offWhite,
    borderColor: Colors.grayDark,
    borderRadius: 2,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 8,
  },
  buttonText: {
    color: Colors.grayDark,
    fontSize: 18,
    padding: 8,
  },
});
