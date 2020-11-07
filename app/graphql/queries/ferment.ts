import { gql } from '@apollo/client';

export default gql`
  {
    ferment(fermentId: $fermentId) {
      recipe {
        name
      }
      brewInstance {
        brewDate {
          startDate
        }
      }
      dateRange {
        startDate
      }
    }
  }
`;
