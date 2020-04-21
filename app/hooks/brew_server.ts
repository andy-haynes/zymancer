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

  async function getUpdate(): Promise<void> {
    try {
      const update = await brewClient?.getLastUpdate();
      if (update) {
        setLastResponse(update);
      }
    } catch (e) {
      console.warn('error getting latest update', e);
    }
  }

  async function schedulePoll(): Promise<void> {
    const scheduleNext = () => setTimeout(() => schedulePoll(), POLL_INTERVAL);
    await getUpdate();
    setPollInterval(scheduleNext());
  }

  async function startService(client: BrewClient): Promise<void> {
    setBrewClient(client);
    await client.startService();
    await schedulePoll();
  }

  useEffect(() => {
    (async () => {
      try {
        const client = await BrewClientService.initializeBrewClient();
        startService(client);
      } catch (e) {
        setBrewServerError(e);
      }
    })();

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