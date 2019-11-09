import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Subscription } from 'rxjs';

import NfcService, { NFCError, NFCStatus } from '../services/nfc';
import { Tag } from '../types/nfc';
import styles from './styles/equipment.style';

export default function Equipment() {
  const [nfcStatus, setNfcStatus] = useState<NFCStatus|null>(null);
  const [nfcError, setNfcError] = useState<NFCError|null>(null);
  const [nfcTagId, setNfcTagId] = useState<string|null>(null);

  useEffect(() => {
    let subscription: Subscription;
    NfcService.initializeTagReader()
      .then((nfcResponse) => {
        const { error, status, tagReader } = nfcResponse;
        setNfcError(error);
        setNfcStatus(status);
        subscription = tagReader.subscribe((tag: Tag) => {
          setNfcTagId(tag.id.toString());
        });
      });

    return () => {
      NfcService.shutdown();
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

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
