import { QueryResult } from '@apollo/client';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

import styles from './styles/query_results.style';

type Props<T> = {
  query: QueryResult<T>;
  render: (data: T) => JSX.Element,
  style?: ViewStyle,
};

export default function QueryResults<T>({
  query,
  render,
}: Props<T>) {
  const { data, error, loading } = query;
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          loading...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          {error.message}
        </Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No data returned
        </Text>
      </View>
    );
  }

  return render(data);
}
