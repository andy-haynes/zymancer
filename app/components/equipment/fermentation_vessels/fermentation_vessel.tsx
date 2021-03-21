import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';

import { GetFermentationVesselQuery, useFermentationVesselQuery } from '../../../hooks/queries';
import { useNavigator } from '../../../hooks/navigation';
import {
  Column,
  QueryResults,
  Row,
  TouchableRow,
} from '../../core';
import styles from './styles/fermentation_vessel.style';

type Props = {
  fermentationVesselId: string;
};

export default function FermentationVessel({ fermentationVesselId }: Props) {
  const fermentationVesselsQuery = useFermentationVesselQuery(fermentationVesselId);
  const { navigateToFerment } = useNavigator();

  return (
    <QueryResults
      query={fermentationVesselsQuery}
      render={({ fermentationVessel }: GetFermentationVesselQuery) => (
        <Column>
          <Row>
            <Text>
              {fermentationVessel.name}
            </Text>
          </Row>
          {fermentationVessel.ferments.map((ferment) => (
            <TouchableRow
              key={ferment.id}
              onPress={() => navigateToFerment({ fermentId: ferment.id })}
              rowStyle={styles.brewInstanceRow}
            >
              <Column style={styles.brewInstance}>
                <Text style={styles.brewInstanceText}>
                  {moment(ferment.dateRange.startDate).format('D MMM YYYY')}
                </Text>
              </Column>
            </TouchableRow>
          ))}
        </Column>
      )}
    />
  );
}
