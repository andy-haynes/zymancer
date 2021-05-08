import React from 'react';
import { View } from 'react-native';
import  { Hop } from 'zymath';

import Container from '../../core/container';
import HopChart from './hop_chart';
import HopRow from './hop_row';
import styles from './styles/hops.style';

type Props = {
  gravity: number;
  hops: Hop[];
};

export default function Hops({ gravity, hops }: Props) {
  return (
    <Container>
      <View style={styles.chart}>
        <HopChart gravity={gravity} hops={hops} />
      </View>
      {hops.map((hop) => (
        <HopRow
          key={hop.id}
          hop={hop}
        />
      ))}
    </Container>
  );
}
