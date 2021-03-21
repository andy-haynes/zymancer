import { gql } from '@apollo/client';

export default gql`
  query brewInstance($brewInstanceId: String!) {
    brewInstance(brewInstanceId: $brewInstanceId) {
      id
      dateRange {
        startDate
      }
      ferment {
        id
        dateRange {
          startDate
        }
      }
      recipe {
        id
        name
      }
    }
  }
`;
