import React from 'react';
import { ScrollView } from 'react-native';

import NFCMonitor from './nfc_monitor';

export default function Equipment() {
  return (
    <ScrollView>
      <NFCMonitor />
    </ScrollView>
  );
}
