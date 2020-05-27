import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import Row from './row';

type Props = {
  children: React.ReactNode,
  onPress: () => void,
  rowStyle?: ViewStyle,
};

export default function TouchableRow({ children, rowStyle, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={rowStyle}>
        {children}
      </Row>
    </TouchableOpacity>
  );
}
