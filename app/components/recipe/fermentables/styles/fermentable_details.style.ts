import { StyleSheet } from 'react-native';

import { colors } from '../../../../theme';

export default StyleSheet.create({
  detail: {
    flex: 1,
  },
  detailContainer: {
    padding: 4,
  },
  detailRow: {
    borderBottomColor: colors.grayLight,
    borderBottomWidth: 1,
  },
  fermentableColor: {
    borderColor: colors.grayDark,
    borderWidth: 1,
    height: '80%',
    width: '60%',
  },
});
