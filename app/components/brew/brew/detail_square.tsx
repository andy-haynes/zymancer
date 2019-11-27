import React from 'react';
import { Text } from 'react-native';

import { ComponentStyle } from '../../../types/react';
import { Column, Row } from '../../core';
import styles from './styles/detail_square';

type Props = {
  name: string|number,
  style?: ComponentStyle,
  value: string|number|null,
};

export default function DetailSquare({ name, style, value }: Props) {
  return (
    <Column style={[styles.square, style]}>
      <Row style={styles.nameRow}>
        <Text style={styles.name}>
          {name}
        </Text>
      </Row>
      <Row style={styles.valueRow}>
        <Text style={styles.value}>
          {value}
        </Text>
      </Row>
    </Column>
  );
}
