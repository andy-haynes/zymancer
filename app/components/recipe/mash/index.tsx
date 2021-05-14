import React from 'react';
import { Text } from 'react-native';
import { MashSchedule } from 'zymath';

import { Column, Container, DetailSquare, Row } from '../../core';
import styles from './styles/index.style';

type Props = {
  schedule: MashSchedule;
};

export default function Mash({ schedule }: Props) {
  return (
    <Container>
      <Row>
        <DetailSquare name={'method'} value={schedule.method} />
        <DetailSquare name={'sparge'} value={schedule.sparge} />
        <DetailSquare name={'efficiency'} value={schedule.efficiency} />
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
