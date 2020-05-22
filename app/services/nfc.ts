import { Observable } from 'rxjs';

import NFCManager from '../native/nfc';
import {
  NFCError,
  NFCResponse,
  NFCStatus,
  Tag,
} from '../types/nfc';
import Platform from '../utils/platform';

async function isNFCSupported(): Promise<boolean> {
  const isSupported = await NFCManager.isSupported();
  if (isSupported && Platform.isAndroid()) {
    return NFCManager.isEnabled();
  }

  return isSupported;
}

async function initialize(): Promise<NFCStatus|NFCError> {
  try {
    const isSupported = await isNFCSupported();
    if (!isSupported) {
      return NFCError.Unsupported;
    }

    return NFCStatus.Initialized;
  } catch (e) {
    console.error(e, 'NFC initialization error');
    return NFCError.Initialization;
  }
}

function registerTagObservable(): Observable<Tag> {
  return new Observable((subscriber) =>
    NFCManager.registerTagEvent((tag: Tag) => subscriber.next(tag))
  );
}

async function initializeTagReader(): Promise<NFCResponse> {
  const status = await initialize();
  return {
    error: (<any>NFCError)[status] || null,
    status: (<any>NFCStatus)[status] || null,
    tagReader: registerTagObservable(),
  };
}

function generateTagIdentifier(): number[] {
  return NFCManager.getUUID();
}

async function writeTag(): Promise<void|NFCError> {
  try {
    return NFCManager.requestWrite(generateTagIdentifier());
  } catch (e) {
    console.error(e, 'tag write error');
    return NFCError.Write;
  }
}

async function formatTag(): Promise<NFCStatus|NFCError> {
  try {
    const isSupported = await isNFCSupported();
    if (!isSupported) {
      return NFCError.Unsupported;
    }

    const data = await writeTag();
    console.warn('wrote data', data);
    return NFCStatus.Formatted;
  } catch (e) {
    console.error(e, 'tag format error');
    return NFCError.Format;
  }
}

export default {
  formatTag,
  initializeTagReader,
};
