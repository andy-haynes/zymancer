import { gql } from '@apollo/client';

export default gql`
  {
    ferments {
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
