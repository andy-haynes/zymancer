import { StyleSheet } from 'react-native';

import { colors, font } from '../../../theme';
import { getWidth } from '../../../utils/dimensions';

export default StyleSheet.create({
  imageBox: {
    marginTop: 1,
  },
  imageLabel: {
    backgroundColor: colors.grayDark,
    borderColor: colors.gray,
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
    color: colors.grayLight,
    fontSize: font.size.medium,
    fontVariant: ['small-caps'],
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
});
