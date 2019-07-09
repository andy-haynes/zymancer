import { StyleSheet } from 'react-native';

import Theme from '../../../theme';

const { Colors, Font } = Theme;

export default StyleSheet.create({
  container: {
    color: Colors.black,
    marginRight: 12,
  },
  text: {
    fontSize: Font.size.medium,
  },
});
