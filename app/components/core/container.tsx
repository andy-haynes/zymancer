import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './styles/container.style';

type Props = {
  children: React.ReactNode,
};

export default function Container({ children }: Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  );
}
