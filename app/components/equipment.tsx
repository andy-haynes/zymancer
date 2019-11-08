import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import NfcService, { NFCError, NFCStatus } from '../services/nfc';
import styles from './styles/equipment.style';

export default function Equipment() {
  const [nfcStatus, setNfcStatus] = useState<NFCStatus|null>(null);
  const [nfcError, setNfcError] = useState<NFCError|null>(null);
  const [nfcTagId, setNfcTagId] = useState<string|null>(null);

  useEffect(() => {
    NfcService.getTagId()
      .then(({ data, error, status }) => {
        setNfcStatus(status);

        if (error) {
          setNfcError(error);
        }

        if (data) {
          setNfcTagId(data.tag);
        }
      });

    return () => {
      NfcService.shutdown();
    };
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Status: {nfcStatus}</Text>
        <Text>Error: {nfcError}</Text>
        <Text>Tag: {nfcTagId}</Text>
      </View>
    </ScrollView>
  );
}
