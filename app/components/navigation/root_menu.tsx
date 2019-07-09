import React from 'react';

import { routes } from '../../constants/routes';
import Container from '../core/container';
import ImageRow from './image_row';

export default function RootMenu() {
  return (
    <Container>
      {routes.map((route) => (
        <ImageRow
          key={route.label}
          navOption={route}
        />
      ))}
    </Container>
  );
}
