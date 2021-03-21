import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';

import { GetBrewInstanceQuery, useBrewInstanceQuery } from '../../hooks/queries';
import { useNavigator } from '../../hooks/navigation';
import { Column, QueryResults, TouchableRow } from '../core';
import styles from './styles/brew_instance.style';

type Props = {
  brewInstanceId: string;
};

export default function BrewInstance({ brewInstanceId }: Props) {
  const brewInstanceQuery = useBrewInstanceQuery(brewInstanceId);

  const {
    navigateToFerment,
    navigateToRecipe,
  } = useNavigator();
  return (
    <QueryResults
      query={brewInstanceQuery}
      render={({ brewInstance }: GetBrewInstanceQuery) => (
        <>
          <TouchableRow
            onPress={() => navigateToRecipe({ recipeId: brewInstance.recipe.id })}
            rowStyle={styles.brewInstanceRow}
          >
            <Column style={styles.recipeName}>
              <Text style={styles.recipeNameText}>
                {brewInstance.recipe.name}
              </Text>
            </Column>
          </TouchableRow>
          <TouchableRow
            onPress={() => navigateToFerment({ fermentId: brewInstance.ferment.id })}
            rowStyle={styles.brewInstanceRow}
          >
            <Column style={styles.brewInstance}>
              <Text style={styles.brewInstanceText}>
                {moment(brewInstance.ferment.dateRange.startDate).format('D MMM YYYY')}
              </Text>
            </Column>
          </TouchableRow>
        </>
      )}
    />
  );
}
