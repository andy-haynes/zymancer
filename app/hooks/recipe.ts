import _ from 'lodash';

import { Recipe } from '../types/recipe';
import { useRandomRecipeQuery } from './queries';

type RecipeResponse = {
  error: string|null;
  loading: boolean;
  recipe: Recipe|null;
};

export function useRandomRecipe(): RecipeResponse {
  const { loading, error, data } = useRandomRecipeQuery();
  return {
    error: _.get(error, 'message', null),
    loading,
    recipe: data?.randomRecipe || null,
  };
}
