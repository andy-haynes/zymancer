import { gql } from '@apollo/client';

export default gql`
  query fermentationVessel($fermentationVesselId: String!) {
    fermentationVessel(fermentationVesselId: $fermentationVesselId) {
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
