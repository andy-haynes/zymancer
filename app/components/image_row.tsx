import React from 'react';
import { Image, Text, View } from 'react-native';

import { ImageNavRoute } from '../constants/routes';

import styles from './styles/image_row.style';

interface Props {
  navOption: ImageNavRoute;
}

export default function ImageRow({ navOption }: Props) {
  return (
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
}
