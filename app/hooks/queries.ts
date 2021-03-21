import { QueryResult, useQuery } from '@apollo/client';
import {
  BrewInstance,
  Ferment,
  FermentationVessel,
  Recipe,
} from 'zymath';

import queries from '../graphql/queries';

export type GetBrewInstanceQuery = {
  brewInstance: BrewInstance;
};

export type GetFermentQuery = {
  ferment: Ferment;
};

export type GetFermentationVesselQuery = {
  fermentationVessel: FermentationVessel;
};

export type GetRecipeQuery = {
  recipe: Recipe;
};

export type ListBrewInstancesQuery = {
  brewInstances: BrewInstance[];
};

export type ListFermentationVesselsQuery = {
  fermentationVessels: FermentationVessel[];
};

export type ListFermentsQuery = {
  ferments: Ferment[];
};

export type ListRecipesQuery = {
  recipes: Recipe[];
};

export function useBrewInstanceQuery(brewInstanceId: string): QueryResult<GetBrewInstanceQuery> {
  return useQuery<GetBrewInstanceQuery>(queries.brewInstance, {
    variables: { brewInstanceId },
  });
}

export function useBrewInstancesQuery(): QueryResult<ListBrewInstancesQuery> {
  return useQuery<ListBrewInstancesQuery>(queries.brewInstances);
}

export function useFermentQuery(fermentId: string): QueryResult<GetFermentQuery> {
  return useQuery<GetFermentQuery>(queries.ferment, {
    variables: { fermentId },
  });
}

export function useFermentationVesselQuery(fermentationVesselId: string): QueryResult<GetFermentationVesselQuery> {
  return useQuery<GetFermentationVesselQuery>(queries.fermentationVessel, {
    variables: { fermentationVesselId },
  });
}

export function useFermentationVesselsQuery(): QueryResult<ListFermentationVesselsQuery> {
  return useQuery<ListFermentationVesselsQuery>(queries.fermentationVessels);
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
