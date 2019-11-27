import _ from 'lodash';
import React from 'react';

import { PID } from '../../../types/brew_server';
import { Row } from '../../core';
import DetailSquare from './detail_square';

export default function PIDStatus({ pid }: { pid: PID }) {
  return (
    <Row>
      <DetailSquare
        name='Setpoint'
        value={pid.setpoint}
      />
      <DetailSquare
        name='Value'
        value={pid.value}
      />
      <DetailSquare
        name='Correction'
        value={pid.lastCorrection && _.round(pid.lastCorrection, 3)}
      />
    </Row>
  );
}
