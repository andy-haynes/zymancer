import Promise from 'bluebird';
import moment from 'moment';
import { useEffect, useState } from 'react';

import BrewService from '../services/brew_server';
import { BrewClient, BrewServerResponse, BrewServerStatus } from '../types/brew_server';

const DEFAULT_PORT = 3000;
const POLL_INTERVAL = moment.duration(1.5, 'second').asMilliseconds();

function createBrewClient(url: string): BrewClient {
  return {
    getLastUpdate: () => BrewService.getLastUpdate(url),
    setTargetTemperature: (temperature: number) => BrewService.setTargetTemperature(url, temperature),
    startService: () => BrewService.startService(url),
  };
}

export function useBrewServerMonitor(): BrewServerStatus {
  const [brewClient, setBrewClient] = useState<BrewClient|null>(null);
  const [brewServerError, setBrewServerError] = useState<Error|null>(null);
  const [lastResponse, setLastResponse] = useState<BrewServerResponse|null>(null);
  const [pollInterval, setPollInterval] = useState<NodeJS.Timer|null>(null);

  useEffect(() => {
    function schedulePoll(client: BrewClient): Promise<any>|null {
      return client.getLastUpdate()
        .then((response) => {
          setLastResponse(response);
          setPollInterval(setTimeout(() => schedulePoll(client), POLL_INTERVAL));
        })
        .catch((e) => console.warn('error getting latest update', e));
    }

    function startService(client: BrewClient): Promise<any>|null {
      return client.startService()
        .then(() => schedulePoll(client))
        .catch((e) => console.warn('error starting service', e));
    }

    BrewService.getBrewServerUrl()
      .then((url) => {
        if (url) {
          return url;
        }
        return BrewService.findBrewServerUrl(DEFAULT_PORT)
          .tap((serverUrl) => BrewService.setBrewServerUrl(serverUrl));
      })
      .then((url) => {
        if (!url) {
          throw new Error(`could not find server listening on port ${DEFAULT_PORT}`);
        }

        const client = createBrewClient(url);
        setBrewClient(client);
        return startService(client);
      })
      .catch((e: Error) => setBrewServerError(e));

    return () => {
      if (pollInterval) {
        clearTimeout(pollInterval);
      }
    };
  }, []);

  return {
    brewServerError,
    lastResponse,
    setTargetTemperature: (temperature: number) =>
      brewClient && brewClient.setTargetTemperature(temperature),
  };
}