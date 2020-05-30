import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../hooks/navigation';
import { ImageNavRoute } from '../../types/routes';
import styles from './styles/image_row.style';

type Props = {
  navOption: ImageNavRoute;
};

export default function ImageRow({ navOption }: Props) {
  const { navigateToScreen } = useNavigator();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      delayPressIn={80}
      key={navOption.label}
      style={styles.row}
      onPress={() => navigateToScreen(navOption.screen)}
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
