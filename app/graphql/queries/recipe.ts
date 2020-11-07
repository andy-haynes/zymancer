import { gql } from '@apollo/client';

export default gql`
  query recipe($recipeId: String!) {
    recipe(recipeId: $recipeId) {
      id
      name
      style {
        name
      }
      brewInstances {
        dateRange {
          startDate
        }
      }
      fermentables {
        gravity
        lovibond
        name
        srm
        weight {
          unit
          value
        }
      }
    }
  }
`;
