import { useEffect, useState } from 'react';

import BrewClientService from '../services/brew_client';
import { BrewClient, BrewServerResponse, BrewServerStatus } from '../types/brew_server';

export function useBrewServerMonitor(): BrewServerStatus {
  const [brewClient, setBrewClient] = useState<BrewClient|null>(null);
  const [brewServerError, setBrewServerError] = useState<Error|null>(null);
  const [lastResponse, setLastResponse] = useState<BrewServerResponse|null>(null);

  useEffect(() => {
    (async () => {
      try {
        const client = await BrewClientService.initializeBrewClient();
        if (client) {
          setBrewClient(client);
          client.startService();

          const brewClientSubscriber = client.getUpdateSubscription();
          brewClientSubscriber.subscribe((message) => {
            setLastResponse({ lastUpdate: message.update });
          });
        }
      } catch (e) {
        setBrewServerError(e);
      }
    })();
  }, []);

  return {
    brewServerError,
    lastResponse,
    setTargetTemperature: (temperature: number) =>
      brewClient?.setTargetTemperature(temperature) || null,
  };
}
