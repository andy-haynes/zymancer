import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  calculateSrm,
  Fermentable,
  getSrmColor,
  VolumeMeasurement,
} from 'zymath';

import { IngredientType } from '../../../constants/recipe';
import { Column } from '../../core';
import IngredientDetailModal from '../modals/ingredient_detail';
import FermentableChart from './fermentable_chart';
import FermentableDetails from './fermentable_details';
import FermentableRow from './fermentable_row';
import styles from './styles/fermentables.style';

type Props = {
  fermentables: Fermentable[];
  targetVolume: VolumeMeasurement;
};

export default function Fermentables(props: Props) {
  const [selectedFermentable, selectFermentable] = useState<Fermentable|null>(null);
  const fermentables: Fermentable[] = [...props.fermentables].reverse();

  function getFermentableSrm(fermentable: Fermentable): number {
    return calculateSrm({
      fermentables: [fermentable],
      targetVolume: props.targetVolume,
    });
  }

  function getFermentableColor(fermentable: Fermentable): string {
    return getSrmColor(getFermentableSrm(fermentable));
  }

  return (
    <Column>
      <IngredientDetailModal
        ingredient={selectedFermentable}
        ingredientType={IngredientType.Malt}
        name={selectedFermentable?.name || ''}
        unselectIngredient={() => selectFermentable(null)}
      >
        {selectedFermentable && (
          <FermentableDetails
            fermentable={selectedFermentable}
            fermentableColor={getFermentableColor(selectedFermentable)}
            srm={getFermentableSrm(selectedFermentable)}
          />
        )}
      </IngredientDetailModal>
      <View style={styles.chart}>
        <FermentableChart
          fermentables={fermentables}
          getFermentableColor={getFermentableColor}
        />
      </View>
      <ScrollView>
        {fermentables.map((fermentable) => (
          <FermentableRow
            key={fermentable.name}
            fermentable={fermentable}
            fermentableColor={getFermentableColor(fermentable)}
            selectFermentable={() => selectFermentable(fermentable)}
          />
        ))}
      </ScrollView>
    </Column>
  );
}
