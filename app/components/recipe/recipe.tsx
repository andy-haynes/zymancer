import React from 'react';
import { Text, View } from 'react-native';

import { useRecipe } from '../../hooks/recipe';
import RecipeTabs from './recipe_tabs';

type Props = {
  recipeId: string;
};

export default function Recipe({ recipeId }: Props) {
  const { loading, error, recipe } = useRecipe(recipeId);

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
