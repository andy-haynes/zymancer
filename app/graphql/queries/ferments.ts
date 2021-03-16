import { gql } from '@apollo/client';

export default gql`
  {
    ferments {
      id
      recipe {
        id
        name
      }
      dateRange {
        startDate
      }
      vessels {
        id
        name
      }
    }
  }
`;
