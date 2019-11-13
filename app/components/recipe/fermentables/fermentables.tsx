import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';

import { Fermentable } from '../../../types/ingredients';
import Container from '../../core/container';
import FermentableChart from './fermentable_chart';
import FermentableRow from './fermentable_row';
import styles from './styles/fermentables.style';

type Props = {
  fermentables: Fermentable[];
};

export default function Fermentables(props: Props) {
  const fermentables: Fermentable[] = _.reverse(props.fermentables || []);
  return (
    <Container>
      <View style={styles.chart}>
        <FermentableChart fermentables={fermentables} />
      </View>
      {fermentables.map((fermentable) => (
        <FermentableRow
          key={fermentable.name}
          fermentable={fermentable}
        />
      ))}
    </Container>
  );
}
