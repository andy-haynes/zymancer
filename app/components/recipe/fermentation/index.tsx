import React from 'react';
import { Text } from 'react-native';
import { Yeast } from 'zymath';

import { Column, Container, Row } from '../../core';
import styles from './styles/index.style';

type Props = {
  yeast: Yeast[];
};

export default function FermentationTab({ yeast }: Props) {
  return (
    <Container>
      {yeast.map(({
        code,
        name,
      }) => (
        <Row key={code}>
          <Column style={styles.yeast}>
            <Text style={styles.yeastCode}>
              {code}
            </Text>
            <Text style={styles.yeastName}>
              {name}
            </Text>
          </Column>
        </Row>
      ))}
    </Container>
  );
}
