import NfcManager, {
  Ndef,
  NdefRecord,
  NfcEvents,
  TagEvent,
} from 'react-native-nfc-manager';

import { Tag } from '../types/nfc';

function encodeMessage(messages: NdefRecord[]): number[] {
  return Array.from(Ndef.encodeMessage(messages));
}

function getRecord(key: string) {
  return Ndef.uriRecord(key);
}

function getUUID(): number[] {
  return encodeMessage([getRecord('uuid')]);
}

async function isEnabled(): Promise<boolean> {
  return NfcManager.isEnabled();
}

async function isSupported(): Promise<boolean> {
  return NfcManager.isSupported();
}

function registerTagEvent(readTag: (tag: Tag) => void): void {
  NfcManager.registerTagEvent()
    .then(() => {
      setTagDiscoverListener(readTag);
    })
    .catch((e) => console.warn(e));
}

async function requestWrite(identifier: number[]): Promise<void> {
  return NfcManager.requestNdefWrite(identifier);
}

function setTagDiscoverListener(onTagDiscovered: (event: TagEvent) => void) {
  NfcManager.setEventListener(NfcEvents.DiscoverTag, onTagDiscovered);
}

export default {
  encodeMessage,
  getRecord,
  getUUID,
  isEnabled,
  isSupported,
  registerTagEvent,
  requestWrite,
};
