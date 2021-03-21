import React from 'react';
import moment from 'moment';

import { ListFermentsQuery, useFermentsQuery } from '../../hooks/queries';
import { useNavigator } from '../../hooks/navigation';
import { Container, ItemRow, QueryResults } from '../core';

export default function Fermentation() {
  const fermentsQuery = useFermentsQuery();
  const { navigateToFerment } = useNavigator();

  return (
    <Container>
      <QueryResults
        query={fermentsQuery}
        render={({ ferments }: ListFermentsQuery) => (
          <>
            {ferments.map((ferment) => (
              <ItemRow
                date={moment(ferment.dateRange.startDate).format('D MMM YYYY')}
                dateLabel={'Fermentation started'}
                key={ferment.id}
                name={ferment.recipe.name}
                navigateToItem={() => navigateToFerment({ fermentId: ferment.id })}
              />
            ))}
          </>
        )}
      />
    </Container>
  );
}
