import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';

import { useNavigator } from '../../hooks/navigation';
import { GetFermentQuery, useFermentQuery } from '../../hooks/queries';
import { Column, QueryResults, Row, TouchableRow } from '../core';
import styles from './styles/ferment.style';

type Props = {
  fermentId: string;
};

export default function Ferment({ fermentId }: Props) {
  const fermentQuery = useFermentQuery(fermentId);
  const {
    navigateToBrewInstance,
    navigateToFermentationVessel,
    navigateToRecipe,
  } = useNavigator();

  return (
    <QueryResults
      query={fermentQuery}
      render={({ ferment }: GetFermentQuery) => (
        <>
          <TouchableRow
            onPress={() => navigateToRecipe({ recipeId: ferment.recipe.id })}
            rowStyle={styles.fermentRow}
          >
            <Column style={styles.recipeName}>
              <Text style={styles.recipeNameText}>
                {ferment.recipe.name}
              </Text>
            </Column>
          </TouchableRow>
          <TouchableRow
            onPress={() => navigateToBrewInstance({ brewInstanceId: ferment.brewInstance.id })}
            rowStyle={styles.fermentRow}
          >
            <Column style={styles.brewInstance}>
              <Text style={styles.brewInstanceText}>
                {moment(ferment.dateRange.startDate).format('D MMM YYYY')}
              </Text>
            </Column>
          </TouchableRow>
          <Row style={styles.vessels}>
            {ferment.vessels.map((vessel) => (
              <TouchableRow
                key={vessel.id}
                onPress={() => navigateToFermentationVessel({ fermentationVesselId: vessel.id })}
              >
                <Text style={styles.vesselNameText}>
                  {vessel.name}
                </Text>
              </TouchableRow>
            ))}
          </Row>
        </>
      )}
    />
  );
}
