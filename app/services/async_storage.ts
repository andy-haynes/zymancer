import AsyncStorage from '../native/async_storage';

export enum StorageKey {
  BrewServerUrl = 'STORAGE_KEY/BREW_SERVER_URL',
}

function get(key: StorageKey): Promise<string|null> {
  return AsyncStorage.getItem(key);
}

function set(key: StorageKey, value: string): Promise<void> {
  return AsyncStorage.setItem(key, value);
}

export default {
  get,
  set,
};
