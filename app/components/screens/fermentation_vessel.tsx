import React from 'react';

import FermentationVessel from '../equipment/fermentation_vessels/fermentation_vessel';

type Props = {
  route: any;
};

export default function FermentationVesselScreen({ route }: Props) {
  const { fermentationVesselId } = route.params;
  return (
    <FermentationVessel fermentationVesselId={fermentationVesselId} />
  );
}
