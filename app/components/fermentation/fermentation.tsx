import React from 'react';
import { Text } from 'react-native';

import { useFermentList } from '../../hooks/fermentation';
import { Container } from '../core';
import FermentRow from './ferment_row';

export default function Fermentation() {
  const { loading, error, ferments } = useFermentList();
  return (
    <Container>
      <Text>Actively Fermenting</Text>
      {loading && (
        <Text>
          Loading...
        </Text>
      )}

      {error && (
        <Text>
          Failed to load ferments
        </Text>
      )}

      {(ferments || []).map((ferment) => (
        <FermentRow
          key={ferment.id}
          ferment={ferment}
        />
      ))}
    </Container>
  );
}
