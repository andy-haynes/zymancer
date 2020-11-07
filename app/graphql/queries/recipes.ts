import { gql } from '@apollo/client';

export default gql`
  {
    recipes {
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
    }
  }
`;
