import Promise from 'bluebird';

export type BrewClient = {
  getLastUpdate: () => Promise<BrewServerResponse|null>,
  setTargetTemperature: (temperature: number) => Promise<BrewServerStatus|null> | null,
  startService: () => Promise<BrewServerStatus|null>,
};

export type BrewServerHeartbeat = {
  alive: boolean,
};

export type BrewServerResponse = {
  lastUpdate: {
    relays: Relay[],
    thermostat: ThermostatResponse,
  },
};

export type BrewServerStatus = {
  brewServerError: Error|null,
  lastResponse: BrewServerResponse|null,
  setTargetTemperature: (temperature: number) => Promise<BrewServerStatus|null>|null,
  status?: string,
};

export type Relay = {
  is_on: boolean,
  pin: number,
};

export type ThermostatResponse = {
  read_at: string,
  temperature: number,
};
