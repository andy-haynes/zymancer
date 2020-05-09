import { webSocket } from 'rxjs/webSocket';

import { BrewClient } from '../types/brew_server';
import BrewServerService from './brew_server';

async function initializeBrewClient(): Promise<BrewClient> {
  const { host, websocketPort, restPort } = await BrewServerService.resolveUrl();
  const restUrl = `http://${host}:${restPort}`;

  const wsSubject = webSocket({
    url: `ws://${host}:${websocketPort}`,
    deserializer: ({ data }) => JSON.parse(data),
  });

  return {
    getUpdateSubscription: () => wsSubject,
    setTargetTemperature: (temperature: number) => BrewServerService.setTargetTemperature(restUrl, temperature),
    startService: () => BrewServerService.startService(restUrl),
  };
}

export default {
  initializeBrewClient,
};
