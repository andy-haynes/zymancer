import React from 'react';
import { ImageSourcePropType, ImageStyle } from 'react-native';
import { Image } from 'react-native-elements';

type Props = {
  source: ImageSourcePropType;
  style?: ImageStyle;
};

export default function ImageComponent({ source, style }: Props) {
  return (
    <Image source={source} style={style} />
  );
}
