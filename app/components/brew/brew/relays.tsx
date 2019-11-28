import _ from 'lodash';
import React from 'react';

import { Relay } from '../../../types/brew_server';
import { Row } from '../../core';
import styles from './styles/relays';
import DetailSquare from './detail_square';

export default function Brew({ relays }: { relays: Relay[] }) {
  return (
    <Row>
      {_.map(relays, ({ is_on, pin }) => (
        <DetailSquare
          key={pin}
          name={`PIN ${pin}`}
          nameStyle={styles.relayPin}
          squareStyle={is_on ? styles.relayOn : styles.relayOff}
          value={is_on ? 'ON' : 'OFF'}
          valueStyle={styles.relayState}
        />
      ))}
    </Row>
  );
}
