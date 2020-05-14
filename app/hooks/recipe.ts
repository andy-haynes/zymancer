import { useQuery } from '@apollo/client';
import _ from 'lodash';

import RandomRecipe from '../graphql/queries/random_recipe';
import { Recipe } from '../types/recipe';

type RecipeQuery = {
  randomRecipe: Recipe;
};

type RecipeResponse = {
  error: string|null;
  loading: boolean;
  recipe: Recipe|null;
};

export function useRandomRecipe(): RecipeResponse {
  const { loading, error, data } = useQuery<RecipeQuery>(RandomRecipe);
  return {
    error: _.get(error, 'message', null),
    loading,
    recipe: data?.randomRecipe || null,
  };
}
