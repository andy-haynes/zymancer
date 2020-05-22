import { randomizeRecipe } from '../utils/ingredients';
import { Recipe } from '../types/recipe';

function getRandomRecipe(): Promise<Recipe> {
  return randomizeRecipe();
}

export default {
  getRandomRecipe,
};
