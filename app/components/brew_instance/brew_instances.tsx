import React from 'react';

import { useNavigator } from '../../hooks/navigation';
import { ListBrewInstancesQuery, useBrewInstancesQuery } from '../../hooks/queries';
import {
  Container,
  ItemRow,
  QueryResults,
  Row,
} from '../core';
import moment from 'moment';

export default function BrewInstances() {
  const brewInstancesQuery = useBrewInstancesQuery();
  const { navigateToBrewInstance } = useNavigator();

  return (
    <Container>
      <QueryResults
        query={brewInstancesQuery}
        render={({ brewInstances }: ListBrewInstancesQuery) => (
          <Row>
            {brewInstances.map((brewInstance) => (
              <ItemRow
                date={moment(brewInstance.ferment.dateRange.startDate).format('D MMM YYYY')}
                dateLabel={'Brewed on'}
                key={brewInstance.id}
                name={brewInstance.recipe.name}
                navigateToItem={() => navigateToBrewInstance({ brewInstanceId: brewInstance.id })}
              />
            ))}
          </Row>
        )}
      />
    </Container>
  );
}
