import _ from 'lodash';
import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native';
import {
  calculateUtilization,
  convertToUnit,
  Hop,
  HopAdditionType,
  WeightUnit,
} from 'zymath';

import Platform from '../../../utils/platform';

type DataPoint = {
  x: string;
  y: number;
};

type ChartProps = {
  gravity?: number;
  hops: Hop[];
};

function calculateHopUtilization(hop: Hop, gravity: number) {
  return hop.additions.reduce((sum, addition) => {
      if (!addition.time) {
        return sum;
      }

      if (addition.type === HopAdditionType.DryHop) {
        return sum;
      }

      return sum + calculateUtilization({
        addition,
        gravity,
      });
    }, 0
  );
}

function generateGreenShade(index: number, total: number, alpha: number) {
  const maxGreen = 255;
  const minGreen = 80;
  // return increasingly lighter shades for greater values of index
  const green = maxGreen - ((maxGreen - minGreen) * (index / total));
  return `rgba(0, ${_.round(green)}, 0, ${alpha})`;
}

function buildHopDataset({ hop, aromas, gravity }: {
  hop: Hop,
  aromas: string[],
  gravity: number
}): DataPoint[] {
  const hopUtilization = calculateHopUtilization(hop, gravity);
  const hopWeightGrams = hop.additions.reduce((sum, addition) => {
    return sum + convertToUnit({ measurement: addition.quantity, unit: WeightUnit.Gram }).value;
  }, 0);

  const hopAromas: { [key: string]: number } = hop.aromaticProfile.reduce((profile, aroma) => ({
    ...profile,
    [aroma]: hopUtilization * hopWeightGrams,
  }), {});

  return _.map(aromas, (aroma) => ({
    x: aroma,
    y: hopAromas[aroma] || 0,
  }));
}

function sortHops(gravity: number, hops: Hop[]) {
  return _.sortBy(
    hops,
    (hop) => calculateHopUtilization(hop, gravity)
  );
}

export default function HopChart({ gravity = 1, hops }: ChartProps) {
  const theme = Platform.isAndroid() ? { theme: VictoryTheme.material } : {};
  const aromas = _.chain(hops)
    .map('aromaticProfile')
    .flatten()
    .uniq()
    .sortBy()
    .value() as string[];

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
      {_.map(sortHops(gravity, hops), (hop, i) => (
        <VictoryLine
          data={buildHopDataset({ hop, aromas, gravity })}
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
