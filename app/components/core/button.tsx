import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ComponentStyle } from '../../types/react';
import styles from './styles/button.style';

type Props = {
  buttonStyle?: ComponentStyle;
  children: React.ReactNode;
  onPress: () => void;
};

export default function Button({ buttonStyle, children, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        {children}
      </View>
    </TouchableOpacity>
  );
}
