import Promise from 'bluebird';

import AsyncStorage from '../native/async_storage';

export enum StorageKey {
  BrewServerUrl = 'STORAGE_KEY/BREW_SERVER_URL',
}

function get(key: StorageKey): Promise<string|null> {
  return Promise.resolve(AsyncStorage.getItem(key));
}

function set(key: StorageKey, value: string): Promise<void> {
  return Promise.resolve(AsyncStorage.setItem(key, value));
}

export default {
  get,
  set,
};
