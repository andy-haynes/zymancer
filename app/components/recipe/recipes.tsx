import React from 'react';
import { Text, View } from 'react-native';

import { useRecipeList } from '../../hooks/recipe';
import { Column } from '../core';
import RecipeRow from './recipe_row';

export default function Recipes() {
  const { loading, error, recipes } = useRecipeList();

  if (loading) {
    return (
      <Text>
        Loading...
      </Text>
    );
  }

  if (error) {
    console.warn(error);
    return (
      <Text>
        Could not load recipes
      </Text>
    );
  }

  if (!recipes) {
    return (
      <View />
    );
  }

  if (!recipes.length) {
    return (
      <Text>
        No recipes found
      </Text>
    );
  }

  return (
    <Column>
      {recipes.map((recipe) => (
        <RecipeRow
          key={recipe.name}
          recipe={recipe}
        />
      ))}
    </Column>
  );
}
