import { Ferment } from 'zymath';

import { useFermentQuery, useFermentsQuery } from './queries';

type QueryResponse = {
  error: string|null;
  loading: boolean;
};

type FermentResponse = QueryResponse & {
  ferment: Ferment|null;
};

type FermentsListResponse = QueryResponse & {
  ferments: Ferment[]|null;
};

export function useFerment(fermentId: string): FermentResponse {
  const { loading, error, data } = useFermentQuery(fermentId);
  return {
    error: error?.message || null,
    loading,
    ferment: data?.ferment || null,
  };
}

export function useFermentList(): FermentsListResponse {
  const { loading, error, data } = useFermentsQuery();
  return {
    error: error?.message || null,
    loading,
    ferments: data?.ferments || null,
  };
}
