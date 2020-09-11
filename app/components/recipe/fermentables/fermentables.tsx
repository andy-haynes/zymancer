import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { IngredientType } from '../../../constants/recipe';
import { Fermentable } from '../../../types/ingredients';
import { Column } from '../../core';
import IngredientDetailModal from '../modals/ingredient_detail';
import FermentableChart from './fermentable_chart';
import FermentableDetails from './fermentable_details';
import FermentableRow from './fermentable_row';
import styles from './styles/fermentables.style';

type Props = {
  fermentables: Fermentable[];
};

export default function Fermentables(props: Props) {
  const [selectedFermentable, selectFermentable] = useState<Fermentable|null>(null);
  const fermentables: Fermentable[] = [...props.fermentables].reverse();

  return (
    <Column>
      <IngredientDetailModal
        ingredient={selectedFermentable}
        ingredientType={IngredientType.Malt}
        name={selectedFermentable?.name || ''}
        unselectIngredient={() => selectFermentable(null)}
      >
        {selectedFermentable && (
          <FermentableDetails fermentable={selectedFermentable} />
        )}
      </IngredientDetailModal>
      <View style={styles.chart}>
        <FermentableChart fermentables={fermentables} />
      </View>
      <ScrollView>
        {fermentables.map((fermentable) => (
          <FermentableRow
            key={fermentable.name}
            fermentable={fermentable}
            selectFermentable={() => selectFermentable(fermentable)}
          />
        ))}
      </ScrollView>
    </Column>
  );
}
