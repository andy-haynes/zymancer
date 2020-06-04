import React from 'react';
import { Text, View } from 'react-native';

import { Fermentable } from '../../../types/ingredients';
import { TouchableRow } from '../../core';
import styles from './styles/fermentable_row.style';

type Props = {
  fermentable: Fermentable;
  selectFermentable: () => void;
};

export default function FermentableRow({ fermentable, selectFermentable }: Props) {
  return (
    <TouchableRow rowStyle={styles.row} onPress={selectFermentable}>
      <View style={[styles.color, { backgroundColor: fermentable.color }]} />
      <Text style={styles.name}>
        {fermentable.name}
      </Text>
    </TouchableRow>
  );
}
