import React from 'react';
import { Text } from 'react-native';

import { useFermentList } from '../../hooks/fermentation';
import Container from '../core/container';

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
      {ferments && (
        <Text>
          {ferments.length}
        </Text>
      )}
    </Container>
  );
}
