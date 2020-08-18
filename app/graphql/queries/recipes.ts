import { gql } from '@apollo/client';

export default gql`
  {
    recipes {
      name
      style {
        name
      }
      lastBrewed
    }
  }
`;
