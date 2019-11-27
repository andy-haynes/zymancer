import React from 'react';
import { View, ViewStyle } from 'react-native';

import styles from './styles/row.style';

type Props = {
  children: React.ReactNode,
  style?: ViewStyle,
};

export default function Row({ children, style }: Props) {
  return (
    <View style={[styles.row, style]}>
      {children}
    </View>
  );
}
