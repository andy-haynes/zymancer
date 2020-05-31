import React from 'react';
import { Button } from 'react-native-elements';

import { ComponentStyle } from '../../types/react';
import styles from './styles/button.style';

type Props = {
  buttonStyle?: ComponentStyle;
  label: string;
  onPress: () => void;
};

export default function ButtonComponent({
  buttonStyle,
  label,
  onPress,
}: Props) {
  return (
    <Button
      buttonStyle={{ ...buttonStyle, ...styles.button }}
      onPress={onPress}
      title={label}
    />
  );
}
