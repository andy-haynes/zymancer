import React from 'react';
import { Text, View } from 'react-native';

import { useRandomRecipe } from '../../hooks/recipe';
import RecipeTabs from './recipe_tabs';

export default function Recipes() {
  const { loading, error, recipe } = useRandomRecipe();

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
      <Text>Could not load recipe</Text>
    );
  }

  if (!recipe) {
    return (
      <View />
    );
  }

  return (
    <RecipeTabs recipe={recipe} />
  );
}
