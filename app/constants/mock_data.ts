import { Recipe } from '../types/recipe';
import srm from './srm';

export const mockRecipe: Recipe = {
  name: 'My Awesome Recipe #6',
  fermentables: [{
    name: '2-Row',
    value: 11,
    color: srm[7],
  }, {
    name: 'Crystal 40',
    value: 1.5,
    color: srm[13],
  }, {
    name: 'Honey Malt',
    value: 0.5,
    color: srm[9],
  }],
  hops: [{
    name: 'Cascade',
    alpha: 7.4,
    beta: 6.3,
    aromaticProfile: ['Floral', 'Citrus', 'Spicy'],
    additions: [{
      minutes: 60,
      quantity: { unit: 'oz', value: 1 },
      type: 'boil',
      utilization: 0.872,
    }],
  }, {
    name: 'Citra',
    alpha: 16.8,
    beta: 12.4,
    aromaticProfile: ['Citrus', 'Tropical Fruit'],
    additions: [{
      minutes: 5,
      quantity: { unit: 'oz', value: 3 },
      type: 'boil',
      utilization: 0.26,
    }, {
      minutes: 0,
      quantity: { unit: 'oz', value: 1 },
      type: 'whirlpool',
      utilization: 0.12,
    }],
  }, {
    name: 'Aramis',
    alpha: 11.6,
    beta: 9.4,
    aromaticProfile: ['Earthy', 'Citrus', 'Spicy', 'Herbal', 'Green'],
    additions: [{
      minutes: 0,
      quantity: { unit: 'oz', value: 1 },
      type: 'whirlpool',
      utilization: 0.19,
    }],
  }],
};
