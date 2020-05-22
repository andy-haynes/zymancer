import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

import NFCService from '../services/nfc';
import {
  NFCError,
  NFCTagResponse,
  NFCStatus,
  Tag,
} from '../types/nfc';

export function useTagReader(): NFCTagResponse {
  const [error, setError] = useState<NFCError|null>(null);
  const [status, setStatus] = useState<NFCStatus|null>(null);
  const [tag, setTag] = useState<Tag|null>(null);
  const [subscription, setSubscription] = useState<Subscription|null>(null);

  useEffect(() => {
    (async () => {
      const nfcResponse = await NFCService.initializeTagReader();
      setError(nfcResponse.error);
      setStatus(nfcResponse.status);
      if (nfcResponse.tagReader) {
        setSubscription(nfcResponse.tagReader.subscribe(setTag));
      }
    })();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  return { error, status, tag };
}
