import { gql } from '@apollo/client';
import { makeExecutableSchema } from 'graphql-tools';

import FermentationService from '../services/fermentation';
import RecipeService from '../services/recipe';

const typeDefs = gql`
  scalar Date

  type BrewInstance {
    brewDate: DateRange
    notes: [Note]
  }

  type DateRange {
    startDate: Date!
    endDate: Date
  }

  type Ferment {
    id: String!
    recipe: Recipe
    brewInstance: BrewInstance
    dateRange: DateRange!
    notes: [Note]
  }

  type Fermentable {
    color: String
    gravity: String
    lovibond: Int
    name: String!
    srm: Float
    weight: Measurement
  }

  type Hop {
    name: String!
    alpha: Float
    beta: Float
    additions: [HopAddition]
    aromaticProfile: [String]
    form: String
  }

  type HopAddition {
    minutes: Int
    quantity: Measurement
    type: String
    ibu: Float
    utilization: Float
  }

  type MashLoss {
    name: String!
  }

  type MashProfile {
    schedule: MashSchedule
  }

  type MashRest {
    temperature: Measurement
    minutes: Int
  }

  type MashSchedule {
    efficiency: Float
    losses: [MashLoss]
    method: String
    rests: [MashRest]
    sparge: String
  }

  type Measurement {
    unit: MeasurementUnit
    value: Float!
  }

  type MeasurementUnit {
    name: String
    shortName: String
    unit: String
  }

  type Note {
    timestamp: Date!
    note: String!
  }

  type Recipe {
    id: String!
    name: String!
    style: RecipeStyle
    lastBrewed: String
    fermentables: [Fermentable]
    hops: [Hop]
    yeast: [Yeast]
    mash: MashProfile
  }

  type RecipeStyle {
    ABV: String
    appearance: String
    aroma: String
    category: String
    characteristicIngredients: String
    code: String
    comments: String
    commercialExamples: [String]
    FG: String
    flavor: String
    history: String
    IBUs: String
    mouthfeel: String
    name: String
    OG: String
    overallImpression: String
    SRM: String
    styleComparison: String
    tags: [String]
  }

  type Yeast {
    name: String!
    code: String
    pitchRate: Float
    pitchTemp: Measurement
    quantity: Int
    targetCellCount: Int
    styles: [String]
  }

  type Query {
    ferment: Ferment
    ferments: [Ferment]
    recipe(recipeId: String): Recipe
    recipes: [Recipe]
  }
`;

const resolvers = {
  Query: {
    ferment: (fermentId: string) => FermentationService.getFerment(fermentId),
    ferments: () => FermentationService.listFerments(),
    recipe: (recipeId: string) => RecipeService.getRandomRecipe(),
    recipes: () => RecipeService.listRecipes(),
  },
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
