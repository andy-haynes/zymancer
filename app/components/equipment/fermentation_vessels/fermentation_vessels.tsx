import React from 'react';

import { ListFermentationVesselsQuery, useFermentationVesselsQuery } from '../../../hooks/queries';
import { useNavigator } from '../../../hooks/navigation';
import { Container, ItemRow, QueryResults } from '../../core';

export default function FermentationVessels() {
  const fermentationVesselsQuery = useFermentationVesselsQuery();
  const { navigateToFermentationVessel } = useNavigator();

  return (
    <Container>
      <QueryResults
        query={fermentationVesselsQuery}
        render={({ fermentationVessels }: ListFermentationVesselsQuery) => (
          <>
            {fermentationVessels.map((fermentationVessel) => (
              <ItemRow
                key={fermentationVessel.id}
                name={fermentationVessel.name}
                navigateToItem={() => navigateToFermentationVessel({
                  fermentationVesselId: fermentationVessel.id,
                })}
              />
            ))}
          </>
        )}
      />
    </Container>
  );
}
