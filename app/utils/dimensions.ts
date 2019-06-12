import { Dimensions } from 'react-native';

const getWindow = () => Dimensions.get('window');
export const getHeight = () => getWindow().height;
export const getWidth = () => getWindow().width;
