import { Observable } from 'rxjs';

import NFCManager from '../native/nfc';
import { NFCError, NFCResponse, NFCStatus, Tag } from '../types/nfc';
import Platform from '../utils/platform';

function isNFCSupported(): Promise<boolean> {
  return NFCManager.isSupported()
    .then((supported) => {
      if (supported && Platform.isAndroid()) {
        return NFCManager.isEnabled();
      }
      return supported;
    });
}

function initialize(): Promise<NFCStatus|NFCError> {
  return isNFCSupported()
    .then((supported) => {
      if (!supported) {
        return NFCError.Unsupported;
      }
      return NFCStatus.Initialized;
    })
    .catch((e: Error) => {
      console.error(e, 'NFC initialization error');
      return NFCError.Initialization;
    });
}

function registerTagObservable(): Observable<Tag> {
  return new Observable((subscriber) =>
    NFCManager.registerTagEvent((tag: Tag) => subscriber.next(tag))
  );
}

function initializeTagReader(): Promise<NFCResponse> {
  return initialize()
    .then((nfcStatus) => ({
      error: (<any>NFCError)[nfcStatus] || null,
      status: (<any>NFCStatus)[nfcStatus] || null,
      tagReader: registerTagObservable(),
    }));
}

function generateTagIdentifier(): number[] {
  return NFCManager.getUUID();
}

function writeTag(): Promise<void|NFCError> {
  return NFCManager.requestWrite(generateTagIdentifier())
    .catch((e: Error) => {
      console.error(e, 'tag write error');
      return NFCError.Write;
    });
}

function formatTag(): Promise<NFCStatus|NFCError> {
  return isNFCSupported()
    .then((supported): Promise<NFCStatus|NFCError>|NFCError => {
      if (supported) {
        return NFCError.Unsupported;
      }
      return writeTag()
        .then((data) => {
          console.warn('wrote data', data);
          return NFCStatus.Formatted;
        });
    })
    .catch((e: Error) => {
      console.error(e, 'tag format error');
      return NFCError.Format;
    });
}

function shutdown(): void {
  NFCManager.stop();
}

export default {
  formatTag,
  initializeTagReader,
  shutdown,
};
