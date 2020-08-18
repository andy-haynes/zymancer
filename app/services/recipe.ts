import { randomizeRecipe, randomizeRecipeList } from '../utils/ingredients';
import { Recipe } from '../types/recipe';

function getRandomRecipe(): Promise<Recipe> {
  return randomizeRecipe();
}

function listRecipes(): Promise<Recipe[]> {
  return randomizeRecipeList();
}

export default {
  getRandomRecipe,
  listRecipes,
};
