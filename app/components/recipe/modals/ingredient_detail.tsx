import React from 'react';

import { IngredientType } from '../../../constants/recipe';
import { Ingredient } from '../../../types/ingredients';
import { icons } from '../../../images';
import { Image, Modal } from '../../core';

type Props = {
  children: React.ReactNode;
  ingredient: Ingredient|null;
  ingredientType: IngredientType;
  name: string;
  unselectIngredient: () => void;
};

function getHeaderImage(ingredientType: IngredientType): number {
  return {
    [IngredientType.Hop]: icons.hop,
    [IngredientType.Malt]: icons.grain,
    [IngredientType.Yeast]: icons.yeast,
  }[ingredientType];
}

export default function IngredientDetailModal({
  children,
  ingredient,
  ingredientType,
  name,
  unselectIngredient,
}: Props) {
  return (
    <Modal
      headerImage={(
        <Image
          source={getHeaderImage(ingredientType)}
          style={{ height: 24, width: 24 }}
        />
      )}
      isVisible={ingredient !== null}
      onDismissModal={unselectIngredient}
      title={name}
    >
      {children}
    </Modal>
  );
}
