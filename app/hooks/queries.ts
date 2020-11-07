import { QueryResult, useQuery } from '@apollo/client';

import queries from '../graphql/queries';
import { Ferment, Recipe } from '../types';

type GetFermentQuery = {
  ferment: Ferment;
};

type GetRecipeQuery = {
  recipe: Recipe;
};

type ListFermentsQuery = {
  ferments: Ferment[];
};

type ListRecipesQuery = {
  recipes: Recipe[];
};

export function useFermentQuery(fermentId: string): QueryResult<GetFermentQuery> {
  return useQuery<GetFermentQuery>(queries.ferment, {
    variables: { fermentId },
  });
}

export function useFermentsQuery(): QueryResult<ListFermentsQuery> {
  return useQuery<ListFermentsQuery>(queries.ferments);
}

export function useRecipeQuery(recipeId: string): QueryResult<GetRecipeQuery> {
  return useQuery<GetRecipeQuery>(queries.recipe, {
    variables: { recipeId },
  });
}

export function useRecipesQuery(): QueryResult<ListRecipesQuery> {
  return useQuery<ListRecipesQuery>(queries.recipes);
}
