import { StyleSheet } from 'react-native';

import Theme from '../../../../theme';

const { Font } = Theme;

export default StyleSheet.create({
  color: {
    height: 80,
    width: 20,
  },
  name: {
    fontSize: Font.size.large,
  },
  row: {
    flexDirection: 'row',
    height: 90,
    margin: 8,
  },
});
