import { QueryResult, useQuery } from '@apollo/client';

import queries from '../graphql/queries';
import { Recipe } from '../types/recipe';

type RecipeQuery = {
  randomRecipe: Recipe;
};

export function useRandomRecipeQuery(): QueryResult<RecipeQuery> {
  return useQuery<RecipeQuery>(queries.randomRecipe);
}
