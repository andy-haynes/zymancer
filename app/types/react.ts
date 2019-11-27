import { TextStyle, ViewStyle } from 'react-native';

export type ComponentStyle = ViewStyle
  | TextStyle
  | Array<ViewStyle | TextStyle | undefined>
  | undefined;
