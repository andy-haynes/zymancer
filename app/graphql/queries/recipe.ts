import { gql } from '@apollo/client';

export default gql`
  {
    recipe {
      id,
      name
      style
      lastBrewed
      fermentables {
        color
        gravity
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
