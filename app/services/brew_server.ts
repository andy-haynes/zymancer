import _ from 'lodash';

import AsyncStorage, { StorageKey } from '../services/async_storage';
import NetworkService from '../services/network';
import { BrewServerResponse, BrewServerStatus } from '../types/brew_server';
import { generateIPRange } from '../utils/network';

const REST_PORT = 3000;
const WEBSOCKET_PORT = 4000;

type BrewServerConfig = {
  host: string;
  restPort: number;
  websocketPort: number;
};

async function checkWebSocket(url: string): Promise<string|null> {
  try {
    // @ts-ignore
    const ws = new WebSocket(url);
    return new Promise((resolve) => {
      ws.onerror = () => resolve(null);
      ws.onopen = () => resolve(url);
    });
  } catch (e) {
    return Promise.resolve(null);
  }
}

async function checkBrewServerUrls(serverConfigs: BrewServerConfig[]): Promise<BrewServerConfig|null> {
  if (_.isEmpty(serverConfigs)) {
    return null;
  }

  const targetConfig = serverConfigs[0];
  const { host, websocketPort } = targetConfig;
  const url = await checkWebSocket(`ws://${host}:${websocketPort}`);
  if (url === null) {
    return checkBrewServerUrls(_.slice(serverConfigs, 1));
  }

  return targetConfig;
}

async function resolveBrewServerConfig(): Promise<BrewServerConfig|null> {
  const ip = await NetworkService.getIPAddress();
  if (!ip) {
    return null;
  }

  const potentialHosts = generateIPRange(ip, 20);
  const serverConfigs = _.map(potentialHosts, (host) => ({
    host,
    restPort: REST_PORT,
    websocketPort: WEBSOCKET_PORT,
  }));

  return checkBrewServerUrls(serverConfigs);
}

function getBrewServerConfig(): Promise<string|null> {
  return AsyncStorage.get(StorageKey.BrewServerConfig);
}

function getLastUpdate(url: string): Promise<BrewServerResponse|null> {
  return NetworkService.get<BrewServerResponse>(`${url}/update`);
}

async function resolveUrl(): Promise<BrewServerConfig> {
  const savedConfig = await getBrewServerConfig();
  if (savedConfig) {
    return JSON.parse(savedConfig);
  }

  const serverConfig = await resolveBrewServerConfig();
  if (!serverConfig) {
    throw new Error(`could not find server listening on port ${WEBSOCKET_PORT}`);
  }

  setBrewServerUrl(serverConfig);
  return serverConfig;
}

function setBrewServerUrl(serverConfig: BrewServerConfig|null): Promise<void> {
  if (!serverConfig) {
    return Promise.resolve();
  }

  return AsyncStorage.set(StorageKey.BrewServerConfig, JSON.stringify(serverConfig));
}

function setTargetTemperature(url: string, temperature: number): Promise<BrewServerStatus|null> {
  return NetworkService.post<BrewServerStatus>(`${url}/set_temperature`, { temperature });
}

function startService(url: string): Promise<BrewServerStatus|null> {
  return NetworkService.post<BrewServerStatus>(`${url}/start`);
}

export default {
  getLastUpdate,
  resolveUrl,
  setTargetTemperature,
  startService,
};
