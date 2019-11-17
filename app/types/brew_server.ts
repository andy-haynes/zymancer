export type BrewServerConfig = {
  host: string,
  port: number,
};

export type BrewServerHeartbeat = {
  alive: boolean,
};

export type BrewServerStatus = {
  status: string,
};

export type BrewServerResponse = {
  last_update: {
    relays: Relay[],
    thermostat: ThermostatResponse,
  }
};

export type Relay = {
  is_on: boolean,
  pin: number,
};

export type ThermostatResponse = {
  read_at: string,
  temperature: number,
};
