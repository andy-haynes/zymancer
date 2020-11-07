import { gql } from '@apollo/client';

export default gql`
  {
    ferments {
      id
      recipe {
        name
      }
      dateRange {
        startDate
      }
    }
  }
`;
