import React from 'react';

import Ferment from '../fermentation/ferment';

type Props = {
  route: any;
};

export default function FermentScreen({ route }: Props) {
  const { fermentId } = route.params;
  return (
    <Ferment fermentId={fermentId} />
  );
}
