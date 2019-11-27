import { StyleSheet } from 'react-native';

import Colors from '../../../../theme/colors';

export default StyleSheet.create({
  name: {
    color: Colors.grayDark,
    fontSize: 14,
    fontWeight: '600',
  },
  nameRow: {
    paddingLeft: 2,
  },
  square: {
    borderColor: Colors.grayLight,
    borderWidth: 1,
    height: 120,
    margin: 2,
    width: 120,
  },
  value: {
    color: Colors.grayDark,
    fontSize: 36,
    fontWeight: '700',
  },
  valueRow: {
  },
});
