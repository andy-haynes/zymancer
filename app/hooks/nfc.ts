import { useEffect, useState } from 'react';
import { Observable, Subscription } from 'rxjs';

import NFCService from '../services/nfc';
import { NFCResponse, Tag } from '../types/nfc';

export function useNfcMonitor(): NFCResponse|null {
  const [response, setResponse] = useState<NFCResponse|null>(null);

  useEffect(() => {
    NFCService.initializeTagReader()
      .then((nfcResponse) => setResponse(nfcResponse));

    return () => NFCService.shutdown();
  }, []);

  return response;
}

export function useTagReader(tagReader: Observable<Tag>): string|null {
  const [tagId, setTagId] = useState<string|null>(null);
  let subscription: Subscription;

  useEffect(() => {
    subscription = tagReader.subscribe(
      (tag: Tag) => setTagId(tag.id.toString())
    );

    return () => subscription.unsubscribe();
  }, []);

  return tagId;
}
