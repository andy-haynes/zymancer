import { gql } from '@apollo/client';

export default gql`
  {
    randomRecipe {
      id,
      name
      style
      lastBrewed
      fermentables {
        color
        gravity {
          value
        }
        lovibond
        name
        weight {
          unit {
            name
            shortName
          }
          value
        }
      }
      hops {
        alpha
        additions {
          quantity {
            unit {
              name
              shortName
            }
            value
          }
        }
        aromaticProfile
        beta
        form
        name
      }
      yeast {
        name
        code
      }
      mash {
        schedule {
          efficiency
          losses
          method
          rests
          sparge
        }
      }
    }
  }
`;
