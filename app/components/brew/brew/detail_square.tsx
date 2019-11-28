import React from 'react';
import { Text } from 'react-native';

import { ComponentStyle } from '../../../types/react';
import { Column, Row } from '../../core';
import styles from './styles/detail_square';

type Props = {
  name: string|number,
  nameStyle?: ComponentStyle,
  squareStyle?: ComponentStyle,
  value: string|number|null,
  valueStyle?: ComponentStyle,
};

export default function DetailSquare({
  name,
  nameStyle,
  squareStyle,
  value,
  valueStyle,
}: Props) {
  return (
    <Column style={[styles.square, squareStyle]}>
      <Row style={styles.nameRow}>
        <Text style={[styles.name, nameStyle]}>
          {name}
        </Text>
      </Row>
      <Row style={styles.valueRow}>
        <Text style={[styles.value, valueStyle]}>
          {value}
        </Text>
      </Row>
    </Column>
  );
}
