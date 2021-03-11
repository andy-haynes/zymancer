import React from 'react';
import { Text, View } from 'react-native';

import { Fermentable } from '../../../types';
import { Column, Row, TouchableRow } from '../../core';
import styles from './styles/fermentable_row.style';

type Props = {
  fermentable: Fermentable;
  fermentableColor: string;
  selectFermentable: () => void;
};

export default function FermentableRow({ fermentable, fermentableColor, selectFermentable }: Props) {
  return (
    <TouchableRow rowStyle={styles.fermentableRow} onPress={selectFermentable}>
      <Column style={styles.colorBar}>
        <View style={[styles.color, { backgroundColor: fermentableColor }]} />
      </Column>
      <Column style={styles.fermentableDetails}>
        <Row>
          <Column style={styles.detailsContainer}>
            <Row>
              <Text style={styles.nameText}>
                {fermentable.name}
              </Text>
            </Row>
            <Row>
              <Text style={styles.gravityText}>
                {fermentable.gravity}
              </Text>
            </Row>
          </Column>
          <Column style={styles.quantityValueContainer}>
            <Text style={styles.quantityValueText}>
              {fermentable.weight.value}
            </Text>
          </Column>
          <Column style={styles.quantityUnitContainer}>
            <Text>
              {fermentable.weight.unit}
            </Text>
          </Column>
        </Row>
      </Column>
    </TouchableRow>
  );
}
