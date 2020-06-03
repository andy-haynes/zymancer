import _ from 'lodash';
import { StyleSheet } from 'react-native';

import { colors, font } from '../../../theme';
import { getHeight } from '../../../utils/dimensions';

export default StyleSheet.create({
  body: {
    padding: 4,
  },
  closeIcon: {
    color: colors.offWhite,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 16,
  },
  header: {
    backgroundColor: colors.grayDark,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  headerImage: {
    left: -20,
    position: 'relative',
    top: 8,
  },
  modal: {
    backgroundColor: colors.offWhite,
    borderRadius: 4,
    maxHeight: _.round(getHeight() - 64),
  },
  title: {
    color: colors.offWhite,
    fontSize: font.size.larger,
    textAlign: 'center',
  },
  titleContainer: {
    position: 'relative',
  },
});
