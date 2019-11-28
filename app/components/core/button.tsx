import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ComponentStyle } from '../../types/react';
import styles from './styles/button.style';

type Props = {
  buttonStyle?: ComponentStyle,
  onPress: () => void,
  text: string,
  textStyle?: ComponentStyle,
};

export default function Button({ buttonStyle, onPress, text, textStyle }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.buttonText, textStyle]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
