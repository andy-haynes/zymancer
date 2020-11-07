import { Recipe } from '../types';
import { useRecipeQuery, useRecipesQuery } from './queries';

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

export function useRecipe(recipeId: string): RecipeResponse {
  const { loading, error, data } = useRecipeQuery(recipeId);
  return {
    error: error?.message || null,
    loading,
    recipe: data?.recipe || null,
  };
}

export function useRecipeList(): RecipesResponse {
  const { loading, error, data } = useRecipesQuery();
  return {
    error: error?.message || null,
    loading,
    recipes: data?.recipes || null,
  };
}
