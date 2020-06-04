import { StyleSheet } from 'react-native';

import { colors, font } from '../../../../theme';

export default StyleSheet.create({
  detail: {
    padding: 4,
  },
  detailLabel: {
    position: 'relative',
  },
  detailLabelText: {
    color: colors.gray,
    fontSize: font.size.small,
    fontVariant: ['small-caps'],
  },
  detailValue: {
    paddingLeft: 12,
  },
  detailValueText: {
    fontSize: font.size.large,
    fontWeight: '700',
  },
});
