import { gql } from '@apollo/client';
import { makeExecutableSchema } from 'graphql-tools';

import RecipeService from '../../services/recipe';

const typeDefs = gql`
  type MeasurementUnit {
    name: String
    shortName: String
    unit: String
  }

  type Measurement {
    unit: MeasurementUnit
    value: Float!
  }

  type Gravity {
    value: String
  }

  type HopAddition {
    minutes: Int
    quantity: Measurement
    type: String
    ibu: Float
    utilization: Float
  }

  type Fermentable {
    color: String
    gravity: Gravity
    lovibond: Int
    name: String!
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

  type Yeast {
    name: String!
    code: String
    pitchRate: Float
    pitchTemp: Measurement
    quantity: Int
    targetCellCount: Int
    styles: [String]
  }

  type MashLoss {
    name: String!
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

  type MashProfile {
    schedule: MashSchedule
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

  type Query {
    randomRecipe: Recipe
    recipes: [Recipe]
  }
`;

const resolvers = {
  Query: {
    randomRecipe: () => RecipeService.getRandomRecipe(),
    recipes: () => RecipeService.listRecipes(),
  },
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
