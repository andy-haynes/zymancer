import { WebSocketSubject } from 'rxjs/webSocket';

export type BrewClient = {
  getUpdateSubscription: () => WebSocketSubject<any>,
  setTargetTemperature: (temperature: number) => Promise<BrewServerStatus|null>,
  startService: () => Promise<BrewServerStatus|null>,
};

export type BrewServerUpdate = {
  relays: Relay[],
  thermostat: ThermostatResponse,
};

export type BrewServerResponse = {
  lastUpdate: BrewServerUpdate,
};

export type BrewServerStatus = {
  brewServerError: Error|null,
  lastResponse: BrewServerResponse|null,
  setTargetTemperature: (temperature: number) => Promise<BrewServerStatus|null>|null,
  status?: string,
};

export type PID = {
  lastCorrection: number|null,
  kP: number|null,
  kI: number|null,
  kD: number|null,
  setpoint: number|null,
  state: string,
  value: number|null,
};

export type Relay = {
  is_on: boolean,
  pin: number,
};

export type ThermostatResponse = {
  pid: PID,
  read_at: string,
  temperature: number,
};
