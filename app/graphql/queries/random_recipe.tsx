import { gql } from '@apollo/client';

export default gql`
  {
    randomRecipe {
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
