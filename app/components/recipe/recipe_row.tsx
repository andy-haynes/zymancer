import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import  { calculateSrm, getSrmColor, Recipe } from 'zymath';

import { useNavigator } from '../../hooks/navigation';
import { Column, TouchableRow } from '../core';
import styles from './styles/recipe_row.style';

type Props = {
  recipe: Recipe;
};

export default function RecipeRow({ recipe }: Props) {
  const { navigateToRecipe } = useNavigator();
  const recipeSrm = calculateSrm({
    fermentables: recipe.fermentables,
    targetVolume: recipe.targetVolume,
  });

  return (
    <TouchableRow
      onPress={() => navigateToRecipe({ recipeId: recipe.id })}
      rowStyle={styles.recipeRow}
    >
      <View
        style={[
          styles.recipeColor,
          { backgroundColor: getSrmColor(recipeSrm) },
        ]}
      />
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
          {moment(recipe.brewInstances?.[0]?.dateRange?.startDate).format('D MMM YYYY')}
        </Text>
      </Column>
    </TouchableRow>
  );
}
