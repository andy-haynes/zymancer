import _ from 'lodash';
import React from 'react';

import { Relay } from '../../../types/brew_server';
import { Row } from '../../core';
import styles from './styles/relays';
import DetailSquare from './detail_square';

export default function Brew({ relays }: { relays: Relay[] }) {
  return (
    <Row>
      {_.map(relays, (relay) => (
        <DetailSquare
          key={relay.pin}
          name={relay.pin}
          style={[styles.relaySquare, relay.is_on ? styles.relayOn : styles.relayOff]}
          value={relay.is_on ? 'On' : 'Off'}
        />
      ))}
    </Row>
  );
}
