import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ImageNavRoute } from '../constants/routes';

import styles from './styles/image_row.style';

interface Props {
  navOption: ImageNavRoute;
}

export default function ImageRow({ navOption }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      delayPressIn={80}
      key={navOption.label}
      style={styles.row}
    >
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
    </TouchableOpacity>
  );
}
