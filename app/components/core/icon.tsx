import React from 'react';
import { ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
  color: string;
  name: string;
  raised?: boolean;
  reverse?: boolean;
  size?: number;
  style?: ViewStyle;
  type: string;
};

export default function IconComponent({
  color,
  name,
  raised,
  reverse,
  size,
  style,
  type,
}: Props) {
  return (
    <Icon
      color={color}
      iconStyle={style}
      name={name}
      raised={raised}
      reverse={reverse}
      size={size}
      type={type}
    />
  );
}
