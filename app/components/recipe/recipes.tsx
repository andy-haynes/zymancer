import React, { useState } from 'react';
import { Text } from 'react-native';

import Container from '../core/container';
import { Recipe } from '../../types/recipe';

export default function Recipes() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  return (
    <Container>
      <Text>{recipe && recipe.name}</Text>
    </Container>
  );
}
