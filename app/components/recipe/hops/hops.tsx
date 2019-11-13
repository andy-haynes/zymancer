import React from 'react';
import { View } from 'react-native';

import { Hop } from '../../../types/ingredients';
import Container from '../../core/container';
import HopChart from './hop_chart';
import HopRow from './hop_row';
import styles from './styles/hops.style';

type Props = {
  hops: Hop[];
};

export default function Hops(props: Props) {
  const hops: Hop[] = props.hops || [];
  return (
    <Container>
      <View style={styles.chart}>
        <HopChart hops={hops} />
      </View>
      {hops.map((hop) => (
        <HopRow
          key={hop.name}
          hop={hop}
        />
      ))}
    </Container>
  );
}
