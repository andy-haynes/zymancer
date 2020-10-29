import { gql } from '@apollo/client';

export default gql`
  {
    ferment {
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
