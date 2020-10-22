import { QueryResult, useQuery } from '@apollo/client';

import queries from '../graphql/queries';
import { Recipe } from '../types/recipe';

type GetRecipeQuery = {
  recipe: Recipe;
};

type ListRecipesQuery = {
  recipes: Recipe[];
};

export function useRecipeQuery(recipeId: string): QueryResult<GetRecipeQuery> {
  return useQuery<GetRecipeQuery>(queries.recipe, {
    variables: { recipeId },
  });
}

export function useRecipesQuery(): QueryResult<ListRecipesQuery> {
  return useQuery<ListRecipesQuery>(queries.recipes);
}
