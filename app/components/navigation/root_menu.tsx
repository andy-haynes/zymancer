import React from 'react';
import { ScrollView, View } from 'react-native';

import { routes } from '../../constants/routes';
import ImageRow from './image_row';
import styles from './styles/root_menu.style';

export default function RootMenu() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {routes.map((route) => (
          <ImageRow
            key={route.label}
            navOption={route}
          />
        ))}
      </View>
    </ScrollView>
  );
}
