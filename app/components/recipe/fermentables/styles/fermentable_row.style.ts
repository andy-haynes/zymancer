import _ from 'lodash';
import { StyleSheet } from 'react-native';

import { getWidth } from '../../../../utils/dimensions';
import { colors, font } from '../../../../theme';

export default StyleSheet.create({
  borderedRow: {
    borderTopColor: colors.grayDark,
    borderTopWidth: _.round(getWidth() * 0.8),
  },
  color: {
    height: 80,
    width: 20,
  },
  colorBar: {
    flex: 1,
  },
  detailsContainer: {
    flex: 7,
  },
  fermentableRow: {
    height: 90,
    margin: 8,
  },
  fermentableDetails: {
    flex: 9,
    paddingVertical: 4,
  },
  gravityText: {
    fontSize: font.size.medium,
  },
  nameText: {
    fontSize: font.size.large,
  },
  quantityUnitContainer: {
    flex: 1,
  },
  quantityValueContainer: {
    flex: 2,
    paddingRight: 8,
  },
  quantityValueText: {
    fontSize: font.size.medium,
    textAlign: 'right',
  },
});
