import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { mockRecipe } from '../../constants/mock_data';
import { Recipe } from '../../types/recipe';
import Container from '../core/container';
import RecipeTabs from './recipe_tabs';

export default function Recipes() {
  const [recipe, setRecipe] = useState<Recipe|null>(null);

  useEffect(() => {
    setRecipe(mockRecipe);
  }, []);

  if (!recipe) {
    return (
      <View />
    );
  }

  return (
    <Container>
      <RecipeTabs recipe={recipe} />
    </Container>
  );
}
