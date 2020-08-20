import { Recipe } from '../types/recipe';
import { useRandomRecipeQuery, useRandomRecipesQuery } from './queries';

type QueryResponse = {
  error: string|null;
  loading: boolean;
};

type RecipeResponse = QueryResponse & {
  recipe: Recipe|null;
  recipeId: string;
};

type RecipesResponse = QueryResponse & {
  recipes: Recipe[]|null;
};

export function useRecipe(recipeId: string): RecipeResponse {
  const { loading, error, data } = useRandomRecipeQuery();
  return {
    error: error?.message || null,
    loading,
    recipe: data?.randomRecipe || null,
    recipeId,
  };
}

export function useRecipeList(): RecipesResponse {
  const { loading, error, data } = useRandomRecipesQuery();
  return {
    error: error?.message || null,
    loading,
    recipes: data?.recipes || null,
  };
}
