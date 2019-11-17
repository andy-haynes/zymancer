import {
  BrewServerConfig,
  BrewServerHeartbeat,
  BrewServerResponse,
  BrewServerStatus,
} from '../types/brew_server';

function buildUrl({ host, port }: BrewServerConfig, path: string): string {
  return `http://${host}:${port}/${path}`;
}

function request<T>(path: string, config: BrewServerConfig, method: string): Promise<T> {
  const url = buildUrl(config, path);
  return fetch(url, { method })
    .then((response) => response.json());
}

function isServerAvailable(config: BrewServerConfig): Promise<boolean> {
  return request<BrewServerHeartbeat>('alive', config, 'GET')
    .then(({ alive }) => alive);
}

function startService(config: BrewServerConfig): Promise<BrewServerStatus> {
  return request<BrewServerStatus>('start', config, 'POST');
}

function getLastUpdate(config: BrewServerConfig): Promise<BrewServerResponse> {
  return request<BrewServerResponse>('update', config, 'GET');
}

export default {
  getLastUpdate,
  isServerAvailable,
  startService,
};
