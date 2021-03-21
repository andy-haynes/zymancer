import { gql } from '@apollo/client';

export default gql`
  {
    recipes {
      id
      name
      fermentables {
        lovibond
        weight {
          unit
          value
        }
      }
      targetVolume {
        unit
        value
      }
      style {
        name
      }
      brewInstances {
        dateRange {
          startDate
        }
      }
    }
  }
`;
