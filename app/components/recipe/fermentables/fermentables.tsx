import _ from 'lodash';
import React, { useState } from 'react';
import { View } from 'react-native';

import { IngredientType } from '../../../constants/recipe';
import { useModal } from '../../../hooks/modal';
import { Fermentable } from '../../../types/ingredients';
import { Container } from '../../core';
import FermentableChart from './fermentable_chart';
import IngredientDetailModal from '../modals/ingredient_detail';
import FermentableDetails from './fermentable_details';
import FermentableRow from './fermentable_row';
import styles from './styles/fermentables.style';

type Props = {
  fermentables: Fermentable[];
};

export default function Fermentables(props: Props) {
  const [selectedFermentable, selectFermentable] = useState<Fermentable|null>(null);
  const { hideModal, isModalVisible, showModal } = useModal();

  const dismissModal = () => {
    hideModal();
    selectFermentable(null);
  };
  const displayModal = (fermentable: Fermentable) => {
    selectFermentable(fermentable);
    showModal();
  };
  const fermentables: Fermentable[] = _.reverse([...props.fermentables]);

  return (
    <Container>
      {selectedFermentable && (
        <IngredientDetailModal
          ingredientType={IngredientType.Malt}
          isVisible={isModalVisible}
          name={selectedFermentable.name}
          onDismissModal={dismissModal}
        >
          <FermentableDetails fermentable={selectedFermentable} />
        </IngredientDetailModal>
      )}
      <View style={styles.chart}>
        <FermentableChart fermentables={fermentables} />
      </View>
      {fermentables.map((fermentable) => (
        <FermentableRow
          key={fermentable.name}
          fermentable={fermentable}
          selectFermentable={() => displayModal(fermentable)}
        />
      ))}
    </Container>
  );
}
