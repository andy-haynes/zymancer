import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';

import { ScreenName } from '../../constants/navigation';
import { useNavigator } from '../../hooks/navigation';
import { Column, TouchableRow } from '../core';
import { Recipe } from '../../types/recipe';
import styles from './styles/recipe_row.style';

type Props = {
  recipe: Recipe;
};

export default function Recipes({ recipe }: Props) {
  const { navigateToScreen } = useNavigator();

  return (
    <TouchableRow
      key={recipe.name}
      onPress={() => navigateToScreen(ScreenName.Recipe, { recipeId: recipe.id })}
      rowStyle={styles.recipeRow}
    >
      <Column>
        <Column style={styles.recipeName}>
          <Text style={styles.recipeNameText}>
            {recipe.name}
          </Text>
        </Column>
        <Column style={styles.recipeStyle}>
          <Text style={styles.recipeStyleText}>
            {recipe.style?.name}
          </Text>
        </Column>
      </Column>
      <Column style={styles.recipeLastBrewed}>
        <Text style={styles.recipeLastBrewedText}>
          {moment(recipe.lastBrewed).format('D MMM YYYY')}
        </Text>
      </Column>
    </TouchableRow>
  );
}
