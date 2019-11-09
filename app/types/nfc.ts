import { TagEvent } from 'react-native-nfc-manager';
import { Observable } from 'rxjs';

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
  error: NFCError|null,
  status: NFCStatus|null,
  tagReader: Observable<Tag>,
};

export type Tag = TagEvent;
