import React, { useState } from 'react';
import { Text } from 'react-native';

import { Recipe } from '../../types/recipe';
import srm from '../../constants/srm';
import Container from '../core/container';
import Fermentables from './fermentables/fermentables';

const fermentables = [{
  name: '2-Row',
  value: 11,
  color: srm[7],
}, {
  name: 'Crystal 40',
  value: 1.5,
  color: srm[13],
}, {
  name: 'Honey Malt',
  value: 0.5,
  color: srm[9],
}];

export default function Recipes() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  return (
    <Container>
      <Text>{recipe && recipe.name}</Text>
      <Fermentables fermentables={fermentables} />
    </Container>
  );
}
