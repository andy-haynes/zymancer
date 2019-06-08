import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export type ImageNav = {
  image: string,
  label: string,
  route?: string,
}

interface Props {
  navOption: ImageNav;
}

export default ({ navOption }: Props) => (
  <View key={navOption.label} style={styles.row}>
    <View style={styles.imageBox}>
      <Image
        style={styles.imageRow}
        source={{ uri: navOption.image }}
      />
      <View style={styles.imageLabel}>
        <Text style={styles.labelText}>
          {navOption.label}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
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
    right: 0,
    width: 120,
  },
  imageRow: {
    height: 125,
    width: 380,
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