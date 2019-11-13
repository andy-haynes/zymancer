import React from 'react';
import { Text, View } from 'react-native';

import { Hop } from '../../../types/ingredients';
import styles from './styles/hop_row.style';

type Props = {
  hop: Hop;
};

export default function FermentableRow({ hop }: Props) {
  return (
    <View style={styles.row}>
      <View style={[styles.color]} />
      <Text style={styles.name}>
        {hop.name} {hop.alpha}% AAU
      </Text>
    </View>
  );
}
