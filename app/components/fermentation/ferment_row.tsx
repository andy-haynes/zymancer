import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';
import  { Ferment } from 'zymath';

import { useNavigator } from '../../hooks/navigation';
import { Column, Row, TouchableRow } from '../core';
import styles from './styles/ferment_row.style';

type Props = {
  ferment: Ferment;
};

export default function FermentRow({ ferment }: Props) {
  const { navigateToRecipe } = useNavigator();

  return (
    <TouchableRow
      onPress={() => navigateToRecipe({ recipeId: ferment.recipe.id })}
      rowStyle={styles.fermentRow}
    >
      <Column>
        <Row style={styles.recipeName}>
          <Text style={styles.recipeNameText}>
            {ferment.recipe.name}
          </Text>
        </Row>
        <Row style={styles.vessels}>
          {ferment.vessels.map((vessel) => (
            <Text style={styles.vesselNameText}>
              {vessel.name}
            </Text>
          ))}
        </Row>
      </Column>
      <Column style={styles.fermentDate}>
        <Text style={styles.fermentDateText}>
          {moment(ferment.dateRange.startDate).format('D MMM YYYY')}
        </Text>
      </Column>
    </TouchableRow>
  );
}
