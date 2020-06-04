import moment from 'moment';

import { BrewServerStatus } from '../../app/types/brew_server';

export const MOCK_STATUS: BrewServerStatus = {
  brewServerError: null,
  lastResponse: {
    lastUpdate: {
      relays: [{
        is_on: true,
        pin: 7,
      }, {
        is_on: false,
        pin: 8,
      }],
      thermostat: {
        pid: {
          kD: 1,
          kI: 3,
          kP: 2,
          lastCorrection: -36.88888,
          setpoint: 60,
          state: 'PID_STATE/UNDER',
          value: 59.5,
        },
        read_at: moment().format(),
        temperature: 59.5,
      },
    },
  },
  setTargetTemperature: (temp: number) => Promise.resolve(null),
};
