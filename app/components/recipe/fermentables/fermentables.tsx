import _ from 'lodash';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { calculateSRM, VolumeMeasurement } from 'zymath';

import { IngredientType } from '../../../constants/recipe';
import SrmRgb from '../../../constants/srm_rgb';
import { Fermentable } from '../../../types';
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

  function getFermentableColor(fermentable: Fermentable): string {
    const srm = _.round(calculateSRM({
      fermentables: [fermentable],
      targetVolume: props.targetVolume,
    }));

    return SrmRgb[srm];
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
