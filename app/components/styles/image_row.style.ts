import { StyleSheet } from 'react-native';

import { getWidth } from '../../utils/dimensions';

export default StyleSheet.create({
  imageBox: {
    marginTop: 1,
  },
  imageLabel: {
    backgroundColor: '#444',
    borderColor: '#888',
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
    color: '#ddd',
    fontSize: 16,
    fontVariant: ['small-caps'],
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
});
