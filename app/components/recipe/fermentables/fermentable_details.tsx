import React from 'react';
import { View } from 'react-native';

import { Fermentable } from '../../../types';
import { Column, Row } from '../../core';
import FermentableDetail from './fermentable_detail';
import styles from './styles/fermentable_details.style';

type Props = {
  fermentable: Fermentable;
  fermentableColor: string;
};

export default function FermentableDetails({ fermentable, fermentableColor }: Props) {
  return (
    <Column style={styles.detailContainer}>
      <Row style={styles.detailRow}>
        <Column style={styles.detail}>
          <FermentableDetail label='Gravity' value={fermentable.gravity} />
        </Column>
        <Column style={styles.detail}>
          <FermentableDetail label='Lovibond' value={fermentable.lovibond} />
        </Column>
      </Row>
      <Row style={styles.detailRow}>
        <Column style={styles.detail}>
          <FermentableDetail label='SRM' value={fermentable.srm} />
        </Column>
        <Column style={styles.detail}>
          <FermentableDetail label='Color'>
            <View
              style={[
                styles.fermentableColor,
                (fermentableColor ? { backgroundColor: fermentableColor } : {}),
              ]}
            />
          </FermentableDetail>
        </Column>
      </Row>
    </Column>
  );
}
