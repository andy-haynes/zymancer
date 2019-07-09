import { StyleSheet } from 'react-native';

import Theme from '../../../theme';
import { getWidth } from '../../../utils/dimensions';

const { Colors, Font } = Theme;

export default StyleSheet.create({
  imageBox: {
    marginTop: 1,
  },
  imageLabel: {
    backgroundColor: Colors.grayDark,
    borderColor: Colors.gray,
    borderWidth: 1,
    bottom: 8,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 8,
    position: 'absolute',
    right: -1,
    width: 120,
  },
  imageRow: {
    height: 125,
    width: getWidth(),
  },
  labelText: {
    color: Colors.grayLight,
    fontSize: Font.size.medium,
    fontVariant: ['small-caps'],
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
});
