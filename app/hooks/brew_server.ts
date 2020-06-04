import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

import { MOCK_STATUS } from '../../tests/fixtures/brew_server_response';
import BrewClientService from '../services/brew_client';
import {
  BrewClient,
  BrewServerResponse,
  BrewServerStatus,
  BrewServerUpdate,
} from '../types/brew_server';

export function useBrewServerMonitor({
 useMockStatus = false,
}: { useMockStatus?: boolean }): BrewServerStatus {
  // TODO mock this in apollo client
  if (useMockStatus) {
    return MOCK_STATUS;
  }

  const [brewClient, setBrewClient] = useState<BrewClient|null>(null);
  const [brewServerError, setBrewServerError] = useState<Error|null>(null);
  const [brewSubscription, setBrewSubscription] = useState<Subscription|null>(null);
  const [lastResponse, setLastResponse] = useState<BrewServerResponse|null>(null);

  useEffect(() => {
    (async () => {
      try {
        const client = await BrewClientService.initializeBrewClient();
        if (!client) {
          return;
        }

        setBrewClient(client);
        await client.startService();

        setBrewSubscription(
          client.getUpdateSubscription()
            .subscribe((message: { update: BrewServerUpdate }) =>
              setLastResponse({ lastUpdate: message.update })
            )
        );
      } catch (e) {
        setBrewServerError(e);
      }
    })();

    return () => {
      if (brewSubscription) {
        brewSubscription.unsubscribe();
      }
    };
  }, []);

  return {
    brewServerError,
    lastResponse,
    setTargetTemperature: (temperature: number) =>
      brewClient?.setTargetTemperature(temperature) || null,
  };
}
