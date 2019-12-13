import Promise from 'bluebird';
import moment from 'moment';
import { useEffect, useState } from 'react';

import BrewClientService from '../services/brew_client';
import { BrewClient, BrewServerResponse, BrewServerStatus } from '../types/brew_server';

const POLL_INTERVAL = moment.duration(1.5, 'second').asMilliseconds();

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
        .then(() => schedulePoll(client));
    }

    BrewClientService.initializeBrewClient()
      .then((client) => {
        setBrewClient(client);
        return startService(client);
      })
      .catch((e) => setBrewServerError(e));

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
      brewClient?.setTargetTemperature(temperature) || null,
  };
}