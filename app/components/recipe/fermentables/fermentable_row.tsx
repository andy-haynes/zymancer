import React from 'react';
import { Text, View } from 'react-native';

import { Fermentable } from '../../../types/ingredients';
import styles from './styles/fermentable_row.style';

type Props = {
  fermentable: Fermentable;
};

export default function FermentableRow({ fermentable }: Props) {
  return (
    <View style={styles.row}>
      <View style={[styles.color, { backgroundColor: fermentable.color }]} />
      <Text style={styles.name}>
        {fermentable.name}
      </Text>
    </View>
  );
}
