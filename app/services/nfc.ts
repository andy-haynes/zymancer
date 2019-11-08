import NfcManager, { Ndef, TagEvent } from 'react-native-nfc-manager';

import Platform from '../utils/platform';

export enum NFCStatus {
  Formatted = 'Formatted',
  Initialized = 'Initialized',
}

export enum NFCError {
  Format = 'FormatError',
  Initialization = 'InitializationError',
  Registration = 'RegistrationError',
  Unsupported = 'UnsupportedError',
  Write = 'Write',
}

export type NFCResponse = {
  data?: {
    tag: string,
  },
  error: NFCError|null,
  status: NFCStatus|null,
};

function isNFCSupported(): Promise<boolean> {
  return NfcManager.isSupported()
    .then((supported) => {
      if (supported && Platform.isAndroid()) {
        return NfcManager.isEnabled();
      }
      return supported;
    });
}

function readTagId(): Promise<string> {
  return new Promise((resolve, reject) => {
    NfcManager.registerTagEvent(
      (tag: TagEvent) => {
        try {
          resolve(tag.id.toString());
        } catch (e) {
          reject(e);
        }
      },
      'nfc'
    );
  });
}

function getTagId(): Promise<NFCResponse> {
  return initialize()
    .then((nfcStatus) => {
      const error = <NFCError>nfcStatus || null;
      const status = <NFCStatus>nfcStatus || null;
      return readTagId()
        .then((id) => ({
          data: {
            tag: id,
          },
          error,
          status,
        }))
        .catch((e: Error) => {
          console.error(e, 'tag registration error');
          return {
            error: NFCError.Registration,
            status,
          };
        });
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

function generateTagIdentifier(): number[] {
  const parseData = (data: number[], value: number): number[] => [...data, value];
  return Ndef.encodeMessage([
    Ndef.uriRecord('uuid'),
  ]).reduce(parseData, []);
}

// TODO look up actual return type
function writeTag(): Promise<number[]|NFCError> {
  return NfcManager.requestNdefWrite(generateTagIdentifier())
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
  NfcManager.stop();
}

export default {
  formatTag,
  getTagId,
  shutdown,
};
