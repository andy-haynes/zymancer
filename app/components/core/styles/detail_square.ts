import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';

export default StyleSheet.create({
  name: {
    color: Colors.grayDark,
    fontSize: 14,
    fontWeight: '600',
  },
  nameRow: {
    flex: 1,
    paddingLeft: 2,
  },
  square: {
    borderColor: Colors.grayLight,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    height: 100,
    margin: 2,
    paddingBottom: 12,
    paddingLeft: 6,
    paddingRight: 12,
    paddingTop: 6,
  },
  value: {
    color: Colors.grayDark,
    fontSize: 46,
    fontWeight: '600',
    textAlign: 'right',
    width: '100%',
  },
  valueRow: {
    flex: 4,
  },
});
