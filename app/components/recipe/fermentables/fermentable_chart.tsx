import React from 'react';
import { VictoryPie } from 'victory-native';

import { Fermentable } from '../../../types/ingredients';

type Props = {
  fermentables: Fermentable[];
};

export default function FermentableChart({ fermentables }: Props) {
  return (
    <VictoryPie
      colorScale={fermentables.map((fermentable) => fermentable.color)}
      data={fermentables.map((fermentable, i) => ({
        x: i,
        y: fermentable.weight.value,
        label: fermentable.name,
      }))}
      innerRadius={50}
      width={300}
    />
  );
}
