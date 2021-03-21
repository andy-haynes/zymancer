import React from 'react';

import BrewInstance from '../brew_instance/brew_instance';

type Props = {
  route: any;
};

export default function BrewInstanceScreen({ route }: Props) {
  const { brewInstanceId } = route.params;
  return (
    <BrewInstance brewInstanceId={brewInstanceId} />
  );
}
