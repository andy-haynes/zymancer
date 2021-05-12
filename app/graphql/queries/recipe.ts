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
      hops {
        id
        name
        aromaticProfile
        alpha
        beta
        additions {
          form
          quantity {
            unit
            value
          }
          time {
            unit
            value
          }
          type
        }
      }
      mash {
        schedule {
          efficiency
          method
          sparge
          rests {
            type
            time {
              unit
              value
            }
            temperature {
              unit
              value
            }
          }
        }
      }
      targetVolume {
        unit
        value
      }
    }
  }
`;
