import React from 'react';
import { VictoryPie } from 'victory-native';

import { Fermentable } from '../../../types';

type Props = {
  fermentables: Fermentable[];
  getFermentableColor: (fermentable: Fermentable) => string;
};

type DataPoint = {
  x: number;
  y: number;
};

type ChartElement = {
  datum: DataPoint;
};

export default function FermentableChart({ fermentables, getFermentableColor }: Props) {
  return (
    <VictoryPie
      colorScale={fermentables.map(getFermentableColor)}
      data={fermentables.map((fermentable, i) => ({
        x: i,
        y: fermentable?.weight?.value,
      }))}
      innerRadius={60}
      labels={() => ''}
      radius={({ datum }: ChartElement) => 60 + datum.y * 5}
      width={350}
    />
  );
}
