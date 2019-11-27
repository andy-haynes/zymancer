import Promise from 'bluebird';
import _ from 'lodash';

import AsyncStorage, { StorageKey } from '../services/async_storage';
import NetworkService from '../services/network';
import { BrewServerHeartbeat, BrewServerResponse, BrewServerStatus, } from '../types/brew_server';
import { generateIPRange } from '../utils/network';

function checkBrewServerUrl(url: string): Promise<string|null> {
  return isServerAvailable(url, true)
    .then((isAvailable) => {
      if (!isAvailable) {
        return null;
      }
      return url;
    });
}

function checkBrewServerUrls(urls: string[]): Promise<string|null> {
  if (_.isEmpty(urls)) {
    return Promise.resolve(null);
  }

  const targetUrl = urls[0];
  return checkBrewServerUrl(targetUrl)
    .then((url) => {
      if (url) {
        return url;
      }
      return checkBrewServerUrls(_.slice(urls, 1));
    });
}

function findBrewServerUrl(port: number): Promise<string|null> {
  return NetworkService.getIPAddress()
    .then((ip: string|null) => {
      if (!ip) {
        return [];
      }
      const potentialHosts = generateIPRange(ip, 20);
      return _.map(potentialHosts, (host) => `http://${host}:${port}`);
    })
    .then((urls) => checkBrewServerUrls(urls));
}

function getBrewServerUrl(): Promise<string|null> {
  return AsyncStorage.get(StorageKey.BrewServerUrl);
}

function getLastUpdate(url: string): Promise<BrewServerResponse|null> {
  return NetworkService.get<BrewServerResponse>(`${url}/update`);
}

function isServerAvailable(url: string, suppressError: boolean): Promise<boolean> {
  return NetworkService.get<BrewServerHeartbeat>(`${url}/alive`, suppressError)
    .then((response) => _.get(response, 'alive', false));
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
  findBrewServerUrl,
  getBrewServerUrl,
  getLastUpdate,
  setBrewServerUrl,
  setTargetTemperature,
  startService,
};
