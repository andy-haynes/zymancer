import { StyleSheet } from 'react-native';

import { colors, font } from '../../../theme';

export default StyleSheet.create({
  emptyContainer: {
    height: 36,
  },
  emptyText: {
    color: colors.grayDark,
    fontSize: font.size.medium,
  },
  errorContainer: {
    backgroundColor: colors.red,
    height: 36,
  },
  errorText: {
    color: colors.offWhite,
    fontSize: font.size.medium,
  },
  loadingContainer: {
    height: 36,
  },
  loadingText: {
    fontSize: font.size.large,
  },
});
