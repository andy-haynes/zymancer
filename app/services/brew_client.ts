import { BrewClient } from '../types/brew_server';
import BrewServerService from './brew_server';

function createBrewClient(url: string): BrewClient {
  return {
    getLastUpdate: () => BrewServerService.getLastUpdate(url),
    setTargetTemperature: (temperature: number) => BrewServerService.setTargetTemperature(url, temperature),
    startService: () => BrewServerService.startService(url),
  };
}

function initializeBrewClient() {
  return BrewServerService.resolveUrl()
    .then((url) => createBrewClient(url));
}

export default {
  initializeBrewClient,
};
