import _ from 'lodash';
import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native';

import { Hop, HopAddition } from '../../../types';
import Platform from '../../../utils/platform';

type DataPoint = {
  x: string;
  y: number;
};

type ChartProps = {
  hops: Hop[];
};

function generateGreenShade(index: number, total: number, alpha: number) {
  const maxGreen = 255;
  const minGreen = 80;
  // return increasingly lighter shades for greater values of index
  const green = maxGreen - ((maxGreen - minGreen) * (index / total));
  return `rgba(0, ${_.round(green)}, 0, ${alpha})`;
}

function buildHopDataset(hop: Hop, aromas: string[]): DataPoint[] {
  const hopAromas: { [key: string]: number } = _.reduce(
    hop.aromaticProfile,
    (profile, aroma) => ({
      ...profile,
      [aroma]: _.sumBy(
        hop.additions,
        (addition: HopAddition) => addition.quantity.value
      ),
    }), {}
  );

  return _.map(aromas, (aroma) => ({
    x: aroma,
    y: hopAromas[aroma] || 0,
  }));
}

function sortHops(hops: Hop[]) {
  return _.sortBy(
    hops,
    (hop) => _.sumBy(
      hop.additions,
      (addition) => addition.utilization
    )
  );
}

export default function HopChart({ hops }: ChartProps) {
  const theme = Platform.isAndroid() ? { theme: VictoryTheme.material } : {};
  const aromas = _.chain(hops)
    .map('aromaticProfile')
    .flatten()
    .uniq()
    .sortBy()
    .value();

  return (
    <VictoryChart polar {...theme}>
      <VictoryPolarAxis
        dependentAxis
        style={{
          tickLabels: {
            fill: 'none',
          },
        }}
        {...theme}
      />
      <VictoryPolarAxis
        labelPlacement='vertical'
        {...theme}
      />
      {_.map(sortHops(hops), (hop, i) => (
        <VictoryLine
          data={buildHopDataset(hop, aromas)}
          key={hop.name}
          style={{
            data: {
              fill: generateGreenShade(i, hops.length, 0.1),
              stroke: generateGreenShade(i, hops.length, 1),
              width: 1,
            },
          }}
        />
      ))}
    </VictoryChart>
  );
}
