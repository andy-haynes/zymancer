import { TagEvent } from 'react-native-nfc-manager';
import { Observable } from 'rxjs';

export type Tag = TagEvent;

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

export type NFCInitializeResponse = {
  error: NFCError|null,
  status: NFCStatus|null,
  tagReader: Observable<Tag>,
};

export type NFCTagResponse = {
  error: NFCError|null,
  status: NFCStatus|null,
  tag: Tag|null,
};
