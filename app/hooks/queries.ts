import { QueryResult, useQuery } from '@apollo/client';

import queries from '../graphql/queries';
import { Recipe } from '../types/recipe';

type GetRecipeQuery = {
  randomRecipe: Recipe;
};

type ListRecipesQuery = {
  recipes: Recipe[];
};

export function useRandomRecipeQuery(): QueryResult<GetRecipeQuery> {
  return useQuery<GetRecipeQuery>(queries.randomRecipe);
}

export function useRandomRecipesQuery(): QueryResult<ListRecipesQuery> {
  return useQuery<ListRecipesQuery>(queries.recipes);
}
