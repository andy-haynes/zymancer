import React from 'react';
import { ScrollView , View } from 'react-native';

import { ImageNavRoute, routes } from '../constants/routes';
import styles from './styles/app.style';
import ImageRow from './image_row';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {routes.map((route: ImageNavRoute) => (
          <ImageRow
            key={route.label}
            navOption={route}
          />
        ))}
      </View>
    </ScrollView>
  );
}
