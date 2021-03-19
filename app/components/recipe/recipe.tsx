import React from 'react';

import { QueryResults } from '../core';
import { GetRecipeQuery, useRecipeQuery } from '../../hooks/queries';
import RecipeTabs from './recipe_tabs';

type Props = {
  recipeId: string;
};

export default function Recipe({ recipeId }: Props) {
  const recipeQuery = useRecipeQuery(recipeId);
  return (
    <QueryResults
      query={recipeQuery}
      render={({ recipe }: GetRecipeQuery) => (
        <RecipeTabs recipe={recipe} />
      )}
    />
  );
}
