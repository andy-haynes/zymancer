import _ from 'lodash';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory-native';

import { Hop } from '../../../types/recipe';
import Platform from '../../../utils/platform';

type Props = {
  hops: Hop[];
};

export default function FermentableChart({ hops }: Props) {
  const theme = Platform.isAndroid() ? { theme: VictoryTheme.material } : {};

  return (
    <VictoryChart polar {...theme}>
      {_.map(hops, (hop) => (
        <VictoryPolarAxis
          dependentAxis
          key={hop.name}
          label={hop.name}
          labelPlacement="perpendicular"
          style={{ tickLabels: { fill: 'none' } }}
          axisValue={hop.additions[0].quantity.value}
        />
      ))}
      <VictoryBar
        style={{ data: { fill: 'tomato', width: 10 } }}
        data={_.map(hops, (hop) => ({
          x: hop.name,
          y: hop.additions[0].quantity.value,
        }))}
      />
    </VictoryChart>
  );
}
