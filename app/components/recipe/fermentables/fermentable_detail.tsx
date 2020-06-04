import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/fermentable_detail.style';

type Props = {
  children?: React.ReactNode;
  label: string;
  value?: number|string|null;
};

export default function FermentableDetail({ children, label, value }: Props) {
  return (
    <View style={styles.detail}>
      <View style={styles.detailLabel}>
        <Text style={styles.detailLabelText}>
          {label}
        </Text>
      </View>
      <View style={styles.detailValue}>
        {children}
        {!children && (
          <Text style={styles.detailValueText}>
            {value}
          </Text>
        )}
      </View>
    </View>
  );
}
