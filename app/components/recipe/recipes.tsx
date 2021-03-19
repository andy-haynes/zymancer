import React from 'react';

import { ListRecipesQuery, useRecipesQuery } from '../../hooks/queries';
import { QueryResults } from '../core';
import RecipeRow from './recipe_row';

export default function Recipes() {
  const recipesQuery = useRecipesQuery();
  return (
    <QueryResults
      query={recipesQuery}
      render={({ recipes }: ListRecipesQuery) => (
        <>
          {recipes.map((recipe) => (
            <RecipeRow
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </>
      )}
    />
  );
}
