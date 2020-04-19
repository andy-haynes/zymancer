import NfcManager, { Ndef, NdefRecord } from 'react-native-nfc-manager';

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

function registerTagEvent(event: (tag: Tag) => void, message: string = 'nfc'): void {
  NfcManager.registerTagEvent(event, message);
}

async function requestWrite(identifier: number[]): Promise<void> {
  return NfcManager.requestNdefWrite(identifier);
}

function stop(): void {
  NfcManager.stop();
}

export default {
  encodeMessage,
  getRecord,
  getUUID,
  isEnabled,
  isSupported,
  registerTagEvent,
  requestWrite,
  stop,
};
