import React from 'react';
import { Text, View } from 'react-native';

import { useNfcMonitor } from '../../hooks/nfc';
import NFCTag from './nfc_tag';

export default function NFCMonitor() {
  const nfcMonitor = useNfcMonitor();
  const {
    error = null,
    status = null,
  } = nfcMonitor || {};

  return (
    <View>
      <Text>
        Status: {status}
      </Text>
      <Text>
        Error: {error}
      </Text>
      {nfcMonitor && (
        <NFCTag tagReader={nfcMonitor.tagReader} />
      )}
    </View>
  );
}
