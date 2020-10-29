import { DateRange, Note } from './common';
import { Recipe } from './recipe';

export type Ferment = {
  id: string;
  recipe: Recipe;
  dateRange: DateRange;
  notes?: Note[];
};
