import { randomizeRecipe } from '../utils/ingredients';
import { Recipe } from '../types/recipe';

function getRecipe(): Promise<Recipe> {
  return randomizeRecipe();
}

export default {
  getRecipe,
};
