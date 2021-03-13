import React from 'react';
import { Fermentable, Hop, Yeast } from 'zymath';

import { IngredientType } from '../../../constants/recipe';
import { icons } from '../../../images';
import { Image, Modal } from '../../core';

type Props = {
  children: React.ReactNode;
  ingredient: Fermentable|Hop|Yeast|null;
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
