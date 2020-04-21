import { useEffect, useState } from 'react';
import { Observable, Subscription } from 'rxjs';

import NFCService from '../services/nfc';
import { NFCResponse, Tag } from '../types/nfc';

export function useNfcMonitor(): NFCResponse|null {
  const [response, setResponse] = useState<NFCResponse|null>(null);

  useEffect(() => {
    (async () => {
      const nfcResponse = await NFCService.initializeTagReader();
      setResponse(nfcResponse);
    })();

    return () => NFCService.shutdown();
  }, []);

  return response;
}

export function useTagReader(tagReader: Observable<Tag>): string|null {
  const [tagId, setTagId] = useState<string|null>(null);
  const [subscription, setSubscription] = useState<Subscription|null>(null);

  const setTag = (tag: Tag) => setTagId(tag.id.toString());
  useEffect(() => {
    setSubscription(tagReader.subscribe(setTag));

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  return tagId;
}
