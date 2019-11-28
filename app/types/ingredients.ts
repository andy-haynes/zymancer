import { HopAdditionType, HopFormType } from '../constants/recipe';
import { Gravity, Measurement } from './zymath';

export type RawIngredient = {
  name: string,
  ingredientType: number,
  /* fermentables */
  color: string,
  gravity?: number,
  lovibond?: string,
  /* hops */
  alpha?: number,
  alphaRange?: string,
  beta?: number,
  betaRange?: string,
  categories?: string,
  aromaticProfile?: string[],
  form?: HopFormType,
  /* yeast */
  code?: string,
  pitchRate?: string,
  pitchTemp?: string,
  styles?: string,
};

export type Fermentable = {
  name: string;
  color: string;
  gravity: Gravity|null;
  lovibond: number|null,
  weight: Measurement;
};

export type HopAddition = {
  minutes: number;
  quantity: Measurement;
  type: HopAdditionType;
  ibu: number;
  utilization: number;
};

export type Hop = {
  name: string;
  alpha: number;
  beta: number;
  additions: HopAddition[];
  aromaticProfile: string[];
  form: HopFormType;
};

export type Yeast = {
  code: string;
  pitchRate?: number;
  pitchTemp?: Measurement;
  quantity: number;
  targetCellCount: number;
  styles?: string;
};

export type Ingredient = Fermentable|Hop|Yeast;
