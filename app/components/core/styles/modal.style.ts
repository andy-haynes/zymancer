import _ from 'lodash';
import { StyleSheet } from 'react-native';

import { colors, font } from '../../../theme';
import { getHeight } from '../../../utils/dimensions';

export default StyleSheet.create({
  body: {
    padding: 4,
    height: '40%',
  },
  header: {
    backgroundColor: colors.grayDark,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    // paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerImage: {
    flex: 1,
    margin: 8,
  },
  modal: {
    backgroundColor: colors.offWhite,
    borderRadius: 4,
    maxHeight: _.round(getHeight() - 64),
  },
  title: {
    color: colors.offWhite,
    fontSize: font.size.larger,
    marginTop: 2,
  },
  titleContainer: {
    flex: 7,
  },
});
