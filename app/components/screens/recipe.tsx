import React from 'react';

import Recipe from '../recipe/recipe';

type Props = {
  route: any;
};

export default function RecipeScreen({ route }: Props) {
  const { recipeId } = route.params;
  return (
    <Recipe recipeId={recipeId} />
  );
}
