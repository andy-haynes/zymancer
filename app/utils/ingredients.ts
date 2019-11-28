import _ from 'lodash';
import moment from 'moment';

import { bjcpStyles } from '../constants/bjcp';
import getIngredients from '../constants/ingredients';
import {
  HopAdditionType,
  HopFormType,
  IngredientType,
  LossType,
  MashMethod,
  SpargeMethod,
  StarterAdditionType,
} from '../constants/recipe';
import SRMColors from '../constants/srm';
import Units from '../constants/units';
import {
  Fermentable,
  Hop,
  Ingredient,
  RawIngredient,
  Yeast,
} from '../types/ingredients';
import { Recipe } from '../types/recipe';
import { Gravity, Range } from '../types/zymath';

function randomByIncrement(min: number, max: number, increment: number): number {
  return min + (increment * _.random(0, max / increment));
}

function randomByRangeIncrement(range: Range, increment: number): number {
  return randomByIncrement(range.low, range.high || range.low, increment);
}

function parseRange(rawRange: string): Range {
  const values = _.map(
    (rawRange || '').split('-'),
    _.parseInt
  );
  const min = _.parseInt(values?.[0].toString());
  const max = _.parseInt(values?.[1].toString());
  return new Range(min, max);
}

function parseRanges(ingredient: RawIngredient): RawIngredient {
  const rangeProps = [
    'attenuation',
    'temperature',
    'tolerance',
  ];
  const ranges: { [rangeKey: string]: string[] } = _.reduce(
    _.keys(ingredient),
    (rangeValues: { [key: string]: any }, key: string) => {
      const rangeKey = _.find(rangeProps, (prop) => key.startsWith(prop));
      if (rangeKey) {
        rangeValues[rangeKey] = rangeValues[rangeKey] || [];
        let index;
        if (key.endsWith('High')) {
          index = 1;
        } else if (key.endsWith('Low')) {
          index = 0;
        }
        if (!_.isNil(index)) {
          rangeValues[rangeKey][index] = _.get(ingredient, key);
        }
      }

      return rangeValues;
    },
    {}
  );

  _.forOwn(ranges, (value: string[], key: string) => {
    _.assign(ranges, { [key]: value.join(' - ') });
  });

  return <RawIngredient>{
    ..._.omit(ingredient, _.flatten(_.map(rangeProps, (prefix) => [`${prefix}High`, `${prefix}Low`]))),
    ...ranges,
  };
}

function filterIngredients(ingredients: RawIngredient[], type: IngredientType): RawIngredient[] {
  const index = {
    [IngredientType.Malt]: 1,
    [IngredientType.Hop]: 2,
    [IngredientType.Yeast]: 3,
  }[type];
  const filteredIngredients: RawIngredient[] = <RawIngredient[]>_.filter(ingredients, { ingredientType: index });
  return _.map(filteredIngredients, parseRanges);
}

function randomizeIngredientType(ingredients: RawIngredient[], type: IngredientType): RawIngredient[] {
  const high = {
    [IngredientType.Malt]: 8,
    [IngredientType.Hop]: 5,
    [IngredientType.Yeast]: 1,
  }[type];
  const count = high - _.random(0, high - 1);
  const filtered = filterIngredients(ingredients, type);
  const indices = _.map(_.range(count), () => _.random(0, filtered.length - 1));
  return _.filter(filtered, (ingredient, i) => _.includes(indices, i));
}

function randomizeFermentables(grains: RawIngredient[]): Fermentable[] {
  return _.map(grains, (grain) => {
    const lovibond = _.parseInt(grain?.lovibond || '') || 0;
    const srm = _.round(1.4922 * Math.pow(lovibond, 0.6859));
    const srmValue = _.min([srm, 40]) || 0;
    const gravity = grain?.gravity;
    return {
      ..._.pick(grain, 'name'),
      weight: {
        value: randomByIncrement(0.25, 15, 0.25),
        unit: Units.Pound,
      },
      color: _.get(SRMColors, srmValue),
      gravity: gravity ? new Gravity(gravity) : null,
      lovibond,
      srm,
    };
  });
}

function randomizeHopAdditions(hops: RawIngredient[]): Hop[] {
  const randomizeAcid = (rawRange: string): number =>
    _.round(randomByRangeIncrement(parseRange(rawRange), 0.1), 1);
  return _.map(hops, (hop) => {
    const name = hop?.name || '';
    const alphaRange = hop?.alphaRange || '';
    const betaRange = hop?.betaRange || '';
    const aromaticProfile = (hop?.categories || '').split(',');
    return {
      ...hop,
      name,
      aromaticProfile,
      alpha: randomizeAcid(alphaRange),
      beta: randomizeAcid(betaRange),
      form: HopFormType.Pellet,
      additions: _.orderBy(_.map(_.range(_.random(1, 3)), () => ({
        minutes: _.random(0, 60),
        type: HopAdditionType.Boil,
        quantity: {
          value: randomByIncrement(0.5, 5, 0.125),
          unit: Units.Ounce,
        },
        ibu: _.random(0, 80),
        utilization: 0.17,
      })), 'time.value', ['desc']),
    };
  });
}

function randomizeYeasts(yeasts: RawIngredient[]): Yeast[] {
  return _.map(yeasts, (yeast) => {
    const code = yeast?.code || '';
    return {
      ...yeast,
      code,
      pitchRate: 1,
      pitchTemp: { value: 68, unit: Units.Fahrenheit },
      quantity: _.random(1, 3),
      targetCellCount: 117.4,
      // starterSteps: [{
      //   volume: { value: 1, unit: Units.Liter },
      //   time: { value: 12, unit: Units.Hour },
      //   gravity: new Gravity('1.035'),
      //   stirPlate: false,
      //   decanted: true,
      //   growthFactor: 1.3,
      //   additions: [{
      //     name: 'Light DME',
      //     type: StarterAdditionType.Fermentable,
      //     quantity: { value: 3, unit: Units.Ounce },
      //   }],
      // }],
    };
  });
}

function orderIngredients(ingredients: Ingredient[], primarySort: string): Ingredient[] {
  return _.orderBy(
    ingredients,
    [primarySort, 'name'],
    ['desc', 'asc']
  );
}

export const randomizeRecipe = (): Promise<Recipe> => {
  return getIngredients()
    .then((ingredients: any[]) => {
      const lastBrewed = moment().subtract(_.random(3, 432), 'days');
      const fermentables = randomizeIngredientType(ingredients, IngredientType.Malt);
      const hops = randomizeIngredientType(ingredients, IngredientType.Hop);
      const yeast = randomizeIngredientType(ingredients, IngredientType.Yeast);
      const style = bjcpStyles[_.random(0, bjcpStyles.length - 1)];

      return {
        name: 'Golden Brett Ale',
        style,
        lastBrewed,
        fermentables: <Fermentable[]>orderIngredients(
          randomizeFermentables(fermentables),
          'weight.value'
        ),
        hops: <Hop[]>orderIngredients(
          randomizeHopAdditions(hops),
          'name'
        ),
        yeast: <Yeast[]>orderIngredients(
          randomizeYeasts(yeast),
          'quantity'
        ),
        mash: {
          schedule: {
            efficiency: 0.75,
            losses: [{
              type: LossType.Boil,
              rate: {
                antecedent: Units.Gallon,
                consequent: Units.Hour,
                value: 1,
              },
            }, {
              type: LossType.Grains,
              rate: {
                antecedent: Units.Gallon,
                consequent: Units.Pound,
                value: 0.1,
              },
            }],
            method: MashMethod.BIAB,
            rests: [{
              recirculated: false,
              temperature: { value: 104, unit: Units.Fahrenheit },
              time: { value: 30, unit: Units.Minute },
            }, {
              recirculated: false,
              temperature: { value: 140, unit: Units.Fahrenheit },
              time: { value: 30, unit: Units.Minute },
            }, {
              recirculated: true,
              temperature: { value: 158, unit: Units.Fahrenheit },
              time: { value: 30, unit: Units.Minute },
            }],
            sparge: SpargeMethod.None,
          },
        },
        targetVolume: {
          unit: Units.Gallon,
          value: 5,
        },
      };
    });
};
