import React from 'react';
import { View } from 'react-native';

import { ComponentStyle } from '../../types/react';
import styles from './styles/column.style';

type Props = {
  children: React.ReactNode,
  style?: ComponentStyle|ComponentStyle[],
};

export default function Column({ children, style }: Props) {
  return (
    <View style={[styles.column, style]}>
      {children}
    </View>
  );
}
