import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type BrewInstance = {
  __typename?: 'BrewInstance';
  id?: Maybe<Scalars['String']>;
  dateRange?: Maybe<DateRange>;
  ferment?: Maybe<Ferment>;
  notes?: Maybe<Array<Maybe<Note>>>;
  recipe?: Maybe<Recipe>;
};

export type DateRange = {
  __typename?: 'DateRange';
  startDate: Scalars['Date'];
  endDate?: Maybe<Scalars['Date']>;
};

export type EquipmentProfile = {
  __typename?: 'EquipmentProfile';
  id: Scalars['String'];
  name: Scalars['String'];
  losses?: Maybe<Array<Maybe<Loss>>>;
};

export type Ferment = {
  __typename?: 'Ferment';
  id: Scalars['String'];
  recipe?: Maybe<Recipe>;
  brewDay?: Maybe<BrewInstance>;
  brewInstance?: Maybe<BrewInstance>;
  dateRange: DateRange;
  gravityDeltas?: Maybe<Array<Maybe<GravityDelta>>>;
  notes?: Maybe<Array<Maybe<Note>>>;
  vessels?: Maybe<Array<Maybe<FermentationVessel>>>;
};

export type Fermentable = {
  __typename?: 'Fermentable';
  color?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  lovibond?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  srm?: Maybe<Scalars['Float']>;
  weight?: Maybe<Measurement>;
};

export type FermentationVessel = {
  __typename?: 'FermentationVessel';
  id: Scalars['String'];
  capacity: Measurement;
  ferments?: Maybe<Array<Maybe<Ferment>>>;
  name: Scalars['String'];
  type: Scalars['String'];
};

export type GravityDelta = {
  __typename?: 'GravityDelta';
  dateRange?: Maybe<DateRange>;
  finalGravity?: Maybe<Scalars['String']>;
  originalGravity?: Maybe<Scalars['String']>;
};

export type Hop = {
  __typename?: 'Hop';
  name: Scalars['String'];
  alpha?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  additions?: Maybe<Array<Maybe<HopAddition>>>;
  aromaticProfile?: Maybe<Array<Maybe<Scalars['String']>>>;
  form?: Maybe<Scalars['String']>;
};

export type HopAddition = {
  __typename?: 'HopAddition';
  minutes?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Measurement>;
  type?: Maybe<Scalars['String']>;
  ibu?: Maybe<Scalars['Float']>;
  utilization?: Maybe<Scalars['Float']>;
};

export type IngredientResults = {
  __typename?: 'IngredientResults';
  fermentables?: Maybe<Array<Maybe<Fermentable>>>;
  hops?: Maybe<Array<Maybe<Hop>>>;
  yeast?: Maybe<Array<Maybe<Yeast>>>;
};


export type IngredientResultsFermentablesArgs = {
  ingredientSearch?: Maybe<IngredientSearchInput>;
};


export type IngredientResultsHopsArgs = {
  ingredientSearch?: Maybe<IngredientSearchInput>;
};


export type IngredientResultsYeastArgs = {
  ingredientSearch?: Maybe<IngredientSearchInput>;
};

export type IngredientSearchInput = {
  searchTerm?: Maybe<Scalars['String']>;
};

export type Loss = {
  __typename?: 'Loss';
  type: Scalars['String'];
  ratio: Ratio;
};

export type MashProfile = {
  __typename?: 'MashProfile';
  schedule?: Maybe<MashSchedule>;
};

export type MashRest = {
  __typename?: 'MashRest';
  temperature?: Maybe<Measurement>;
  minutes?: Maybe<Scalars['Int']>;
};

export type MashSchedule = {
  __typename?: 'MashSchedule';
  efficiency?: Maybe<Scalars['Float']>;
  method?: Maybe<Scalars['String']>;
  rests?: Maybe<Array<Maybe<MashRest>>>;
  sparge?: Maybe<Scalars['String']>;
};

export type Measurement = {
  __typename?: 'Measurement';
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type Note = {
  __typename?: 'Note';
  timestamp: Scalars['Date'];
  note: Scalars['String'];
};

export type Ratio = {
  __typename?: 'Ratio';
  antecedent: Scalars['String'];
  consequent: Scalars['String'];
  value: Scalars['Float'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  name: Scalars['String'];
  style?: Maybe<RecipeStyle>;
  brewInstances?: Maybe<Array<Maybe<BrewInstance>>>;
  fermentables?: Maybe<Array<Maybe<Fermentable>>>;
  hops?: Maybe<Array<Maybe<Hop>>>;
  yeast?: Maybe<Array<Maybe<Yeast>>>;
  mash?: Maybe<MashProfile>;
  ferments?: Maybe<Array<Maybe<Ferment>>>;
};

export type RecipeStyle = {
  __typename?: 'RecipeStyle';
  ABV?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['String']>;
  aroma?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  characteristicIngredients?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  commercialExamples?: Maybe<Array<Maybe<Scalars['String']>>>;
  FG?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  history?: Maybe<Scalars['String']>;
  IBUs?: Maybe<Scalars['String']>;
  mouthfeel?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  OG?: Maybe<Scalars['String']>;
  overallImpression?: Maybe<Scalars['String']>;
  SRM?: Maybe<Scalars['String']>;
  styleComparison?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Yeast = {
  __typename?: 'Yeast';
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  pitchRate?: Maybe<Scalars['Float']>;
  pitchTemp?: Maybe<Measurement>;
  quantity?: Maybe<Scalars['Int']>;
  targetCellCount?: Maybe<Scalars['Int']>;
  styles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  brewDay?: Maybe<BrewInstance>;
  brewDays?: Maybe<Array<Maybe<BrewInstance>>>;
  ferment?: Maybe<Ferment>;
  ferments?: Maybe<Array<Maybe<Ferment>>>;
  fermentationVessel?: Maybe<FermentationVessel>;
  fermentationVessels?: Maybe<Array<Maybe<FermentationVessel>>>;
  ingredients?: Maybe<IngredientResults>;
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  style?: Maybe<RecipeStyle>;
  styles?: Maybe<Array<Maybe<RecipeStyle>>>;
};


export type QueryBrewDayArgs = {
  brewInstanceId?: Maybe<Scalars['String']>;
};


export type QueryFermentArgs = {
  fermentId?: Maybe<Scalars['String']>;
};


export type QueryFermentationVesselArgs = {
  vesselId?: Maybe<Scalars['String']>;
};


export type QueryRecipeArgs = {
  recipeId?: Maybe<Scalars['String']>;
};


export type QueryStyleArgs = {
  styleId?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

