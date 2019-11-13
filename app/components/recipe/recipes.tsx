import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Recipe } from '../../types/recipe';
import { randomizeRecipe } from '../../utils/ingredients';
import Container from '../core/container';
import RecipeTabs from './recipe_tabs';

export default function Recipes() {
  const [recipe, setRecipe] = useState<Recipe|null>(null);

  useEffect(() => {
    randomizeRecipe()
      .then((randomRecipe) => setRecipe(randomRecipe));
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
