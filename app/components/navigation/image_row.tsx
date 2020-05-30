import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import NavigationService from '../../services/navigation';
import { ImageNavRoute } from '../../types/routes';
import styles from './styles/image_row.style';

type Props = {
  navOption: ImageNavRoute;
};

export default function ImageRow({ navOption }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      delayPressIn={80}
      key={navOption.label}
      style={styles.row}
      onPress={() => navOption.screen && NavigationService.navigate(navOption.screen)}
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
