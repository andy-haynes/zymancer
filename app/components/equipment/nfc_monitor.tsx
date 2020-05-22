import React from 'react';
import { Text, View } from 'react-native';

import { useTagReader } from '../../hooks/nfc';
import NFCTag from './nfc_tag';

export default function NFCMonitor() {
  const { error, status, tag } = useTagReader();

  return (
    <View>
      <Text>
        Status: {status}
      </Text>
      <Text>
        Error: {error}
      </Text>
      <NFCTag tagId={tag?.id?.toString() || null} />
    </View>
  );
}
