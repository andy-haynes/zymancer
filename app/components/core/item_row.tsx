import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

import Column from './column';
import styles from './styles/item_row.style';
import TouchableRow from './touchable_row';

type Props = {
  date?: string;
  dateLabel?: string;
  name: string;
  navigateToItem: () => void;
  stripeColor?: string;
  style?: ViewStyle;
};

export default function ItemRow({
  date,
  dateLabel,
  name,
  navigateToItem,
  stripeColor,
  style,
}: Props) {
  return (
    <TouchableRow
      onPress={navigateToItem}
    >
      {!!stripeColor && (
        <Column>
          <View style={[styles.colorStripe, { backgroundColor: stripeColor }]} />
        </Column>
      )}
      <Column style={styles.nameContainer}>
        <Text style={styles.nameText}>
          {name}
        </Text>
      </Column>
      {!!date && (
        <Column style={styles.dateContainer}>
          <Text style={styles.dateLabel}>
            {dateLabel}
          </Text>
          <Text style={styles.dateText}>
            {date}
          </Text>
        </Column>
      )}
    </TouchableRow>
  );
}
