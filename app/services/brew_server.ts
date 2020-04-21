import _ from 'lodash';

import AsyncStorage, { StorageKey } from '../services/async_storage';
import NetworkService from '../services/network';
import { BrewServerHeartbeat, BrewServerResponse, BrewServerStatus } from '../types/brew_server';
import { generateIPRange } from '../utils/network';

const DEFAULT_PORT = 3000;

async function checkBrewServerUrl(url: string): Promise<string|null> {
  const isAvailable = await isServerAvailable(url, true);
  if (!isAvailable) {
    return null;
  }

  return url;
}

async function checkBrewServerUrls(urls: string[]): Promise<string> {
  const targetUrl = urls[0];
  const url = await checkBrewServerUrl(targetUrl);
  if (url) {
    return url;
  }

  return checkBrewServerUrls(_.slice(urls, 1));
}

async function findBrewServerUrl(port: number): Promise<string|null> {
  const ip = await NetworkService.getIPAddress();
  if (!ip) {
    return null;
  }

  const potentialHosts = generateIPRange(ip, 20);
  const urls = _.map(potentialHosts, (host) => `http://${host}:${port}`);
  return checkBrewServerUrls(urls);
}

function getBrewServerUrl(): Promise<string|null> {
  return AsyncStorage.get(StorageKey.BrewServerUrl);
}

function getLastUpdate(url: string): Promise<BrewServerResponse|null> {
  return NetworkService.get<BrewServerResponse>(`${url}/update`);
}

async function isServerAvailable(url: string, suppressError: boolean): Promise<boolean> {
  const heartbeatResponse = await NetworkService.get<BrewServerHeartbeat>(`${url}/alive`, suppressError);
  return heartbeatResponse?.alive || false;
}

async function resolveUrl(): Promise<string> {
  const url = await getBrewServerUrl();
  if (url) {
    return url;
  }

  const serverUrl = await findBrewServerUrl(DEFAULT_PORT);
  if (!serverUrl) {
    throw new Error(`could not find server listening on port ${DEFAULT_PORT}`);
  }

  setBrewServerUrl(serverUrl);
  return serverUrl;
}

function setBrewServerUrl(url: string|null): Promise<void> {
  if (!url) {
    return Promise.resolve();
  }

  return AsyncStorage.set(StorageKey.BrewServerUrl, url);
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
