import { HopAdditionType, HopFormType } from '../constants/recipe';
import { Gravity, Measurement } from './zymath';

export type Fermentable = {
  name: string;
  color: string;
  gravity: Gravity|null;
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
