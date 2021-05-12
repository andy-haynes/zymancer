import React from 'react';
import { Text } from 'react-native';
import { MashSchedule } from 'zymath';

import { Column, Container, Row } from '../../core';
import styles from './styles/index.style';

type Props = {
  schedule: MashSchedule;
};

export default function Fermentables({ schedule }: Props) {
  return (
    <Container>
      <Row>
        <Column>
          <Row>
            <Text style={styles.propertyHeader}>
              Method
            </Text>
          </Row>
          <Row>
            <Text style={styles.propertyValue}>
              {schedule.method}
            </Text>
          </Row>
        </Column>
        <Column>
          <Row>
            <Text style={styles.propertyHeader}>
              Sparge
            </Text>
          </Row>
          <Row>
            <Text style={styles.propertyValue}>
              {schedule.sparge}
            </Text>
          </Row>
        </Column>
        <Column>
          <Row>
            <Text style={styles.propertyHeader}>
              Efficiency
            </Text>
          </Row>
          <Row>
            <Text style={styles.propertyValue}>
              {schedule.efficiency}
            </Text>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          {schedule.rests.map((rest) => (
            <Row key={rest.time.value} style={styles.rests}>
              <Column>
                <Text>
                  {rest.type}
                </Text>
              </Column>
              <Column>
                <Text>
                  {rest.time.value} {rest.time.unit}
                </Text>
              </Column>
              <Column>
                <Text>
                  {rest.temperature.value} {rest.temperature.unit}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Row>
    </Container>
  );
}
