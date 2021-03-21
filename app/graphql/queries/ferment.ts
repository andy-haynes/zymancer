import { gql } from '@apollo/client';

export default gql`
  query ferment($fermentId: String!) {
    ferment(fermentId: $fermentId) {
      id
      recipe {
        id
        name
      }
      brewInstance {
        id
        dateRange {
          startDate
        }
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
