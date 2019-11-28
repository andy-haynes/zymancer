import _ from 'lodash';
import React from 'react';

import { PID } from '../../../types/brew_server';
import { Row } from '../../core';
import DetailSquare from './detail_square';
import styles from './styles/pid';

const TEMPERATURE_THRESHOLD = 0.005;

function isInTemperatureRange(target: number|null, value: number|null): boolean {
  if (!target || !value) {
    return false;
  }

  const minTemperatureDelta = target * TEMPERATURE_THRESHOLD;
  const temperatureDelta = Math.abs(target - value);
  return temperatureDelta <= minTemperatureDelta;
}

export default function PIDStatus({ pid }: { pid: PID }) {
  const { lastCorrection, setpoint, value } = pid;
  const correction = lastCorrection && _.round(lastCorrection, 3);
  const setpointDelta = (value && setpoint) ? _.round(value - setpoint, 1) : 0;

  return (
    <>
      <Row>
        <DetailSquare
          name='Setpoint'
          value={setpoint}
        />
        <DetailSquare
          name='Correction'
          value={correction}
        />
      </Row>
      <Row>
        <DetailSquare
          name='∆ C˚'
          nameStyle={styles.temperatureDeltaText}
          squareStyle={isInTemperatureRange(setpoint, value) ? styles.temperatureInsideRange : styles.temperatureOutsideRange}
          value={`${setpointDelta} ˚C`}
          valueStyle={styles.temperatureDeltaText}
        />
        <DetailSquare
          name='Value'
          value={`${value} ˚C`}
        />
      </Row>
    </>
  );
}
