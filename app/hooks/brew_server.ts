import moment from 'moment';
import { useEffect, useState } from 'react';

import BrewService from '../services/brew_server';
import { BrewServerConfig, BrewServerResponse, BrewServerStatus } from '../types/brew_server';

const DEFAULT_CONFIG = {
  host: '192.168.0.108',
  port: 3000,
};
const POLL_INTERVAL = moment.duration(1.5, 'second').asMilliseconds();

type BrewClient = {
  getLastUpdate: () => Promise<BrewServerResponse>,
  startService: () => Promise<BrewServerStatus>,
};

export function useBrewClient(config: BrewServerConfig): BrewClient {
  return {
    getLastUpdate: () => BrewService.getLastUpdate(config),
    startService: () => BrewService.startService(config),
  };
}

export function useBrewServerPolling(): BrewServerResponse|null {
  const [lastResponse, setLastResponse] = useState<BrewServerResponse|null>(null);
  const [pollInterval, setPollInterval] = useState<NodeJS.Timer|null>(null);
  const { getLastUpdate, startService } = useBrewClient(DEFAULT_CONFIG);

  useEffect(() => {
    function schedulePoll() {
      return getLastUpdate()
        .then((response) => {
          setLastResponse(response);
          setPollInterval(setTimeout(schedulePoll, POLL_INTERVAL));
        })
        .catch((e) => console.warn('error getting latest update', e));
    }

    startService()
      .then(() => schedulePoll())
      .catch((e) => console.warn('error starting service', e));

    return () => {
      if (pollInterval) {
        clearTimeout(pollInterval);
      }
    };
  }, []);

  return lastResponse;
}