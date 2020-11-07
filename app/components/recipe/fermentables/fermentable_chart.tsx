import React from 'react';
import { VictoryPie } from 'victory-native';

import { Fermentable } from '../../../types';

type Props = {
  fermentables: Fermentable[];
};

type DataPoint = {
  x: number;
  y: number;
};

type ChartElement = {
  datum: DataPoint;
};

export default function FermentableChart({ fermentables }: Props) {
  return (
    <VictoryPie
      colorScale={fermentables.map((fermentable) => fermentable.color)}
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
