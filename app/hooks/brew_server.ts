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

  function getUpdate(): Promise<void>|undefined {
    return brewClient?.getLastUpdate()
      .then((response) => setLastResponse(response))
      .catch((e) => console.warn('error getting latest update', e));
  }

  function schedulePoll(): Promise<void>|undefined {
    const scheduleNext = () => setTimeout(() => schedulePoll(), POLL_INTERVAL);
    return getUpdate()
      ?.then(() => setPollInterval(scheduleNext()));
  }

  function startService(client: BrewClient): Promise<void> {
    setBrewClient(client);
    return client.startService()
      .then(() => schedulePoll());
  }

  useEffect(() => {
    BrewClientService.initializeBrewClient()
      .then((client) => startService(client))
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