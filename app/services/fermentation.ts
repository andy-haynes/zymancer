import moment from 'moment';

import { Ferment } from '../types/fermentation';
import { randomizeRecipe } from '../utils/ingredients';

async function getFerment(fermentId: string): Promise<Ferment> {
  return Promise.resolve({
    id: fermentId,
    dateRange: {
      startDate: moment().toDate(),
    },
    recipe: await randomizeRecipe(),
  });
}

async function listFerments(): Promise<Ferment[]> {
  const randomizeFerment = async (n: number): Promise<Ferment> => ({
    id: n.toString(),
    dateRange: {
      startDate: moment().subtract(n, 'week').toDate(),
    },
    recipe: await randomizeRecipe(),
  });

  return Promise.resolve([
    await randomizeFerment(1),
  ]);
}

export default {
  getFerment,
  listFerments,
};
