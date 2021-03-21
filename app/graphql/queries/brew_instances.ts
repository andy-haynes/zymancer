import { gql } from '@apollo/client';

export default gql`
  {
    brewInstances {
      id
      recipe {
        id
        name
      }
      ferments {
        id
      }
    }
  }
`;
