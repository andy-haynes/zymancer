import _ from 'lodash';
import React from 'react';

import Colors from '../../../theme/colors';
import { PID } from '../../../types/brew_server';
import { DetailSquare, Row } from '../../core';
import styles from './styles/pid';

const TEMPERATURE_THRESHOLD_LOW = 0.005;
const TEMPERATURE_THRESHOLD_HIGH = 0.01;

function isInTemperatureRange(target: number|null, value: number|null, thresholdPercentage: number): boolean {
  if (!target || !value) {
    return false;
  }

  const minTemperatureDelta = target * thresholdPercentage;
  const temperatureDelta = Math.abs(target - value);
  return temperatureDelta <= minTemperatureDelta;
}

function getDeltaColor(target: number|null, value: number|null): string {
  if (isInTemperatureRange(target, value, TEMPERATURE_THRESHOLD_LOW)) {
    return Colors.green;
  }

  if (isInTemperatureRange(target, value, TEMPERATURE_THRESHOLD_HIGH)) {
    return Colors.yellow;
  }

  return Colors.red;
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
          squareStyle={{ backgroundColor: getDeltaColor(setpoint, value) }}
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
