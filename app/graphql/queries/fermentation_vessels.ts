import { gql } from '@apollo/client';

export default gql`
  {
    fermentationVessels {
      id
      name
      ferments {
        id
        dateRange {
          endDate
          startDate
        }
      }
    }
  }
`;
