import { BrewClient } from '../types/brew_server';
import BrewServerService from './brew_server';

function createBrewClient(url: string): BrewClient {
  return {
    getLastUpdate: () => BrewServerService.getLastUpdate(url),
    setTargetTemperature: (temperature: number) => BrewServerService.setTargetTemperature(url, temperature),
    startService: () => BrewServerService.startService(url),
  };
}

async function initializeBrewClient() {
  const url = await BrewServerService.resolveUrl();
  return createBrewClient(url);
}

export default {
  initializeBrewClient,
};
