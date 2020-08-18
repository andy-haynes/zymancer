import _ from 'lodash';

import { Recipe } from '../types/recipe';
import { useRandomRecipeQuery, useRandomRecipesQuery } from './queries';

type QueryResponse = {
  error: string|null;
  loading: boolean;
};

type RecipeResponse = QueryResponse & {
  recipe: Recipe|null;
};

type RecipesResponse = QueryResponse & {
  recipes: Recipe[]|null;
};

export function useRecipe(): RecipeResponse {
  const { loading, error, data } = useRandomRecipeQuery();
  return {
    error: _.get(error, 'message', null),
    loading,
    recipe: data?.randomRecipe || null,
  };
}

export function useRecipeList(): RecipesResponse {
  const { loading, error, data } = useRandomRecipesQuery();
  return {
    error: _.get(error, 'message', null),
    loading,
    recipes: data?.recipes || null,
  };
}
