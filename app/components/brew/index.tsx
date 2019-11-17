import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';

import { useBrewServerResponse } from '../../hooks/brew_server';
import { BrewServerResponse, ThermostatResponse } from '../../types/brew_server';
import Container from '../core/container';

const getThermostatResponse = (response: BrewServerResponse|null): ThermostatResponse|null => {
  if (!response) {
    return null;
  }

  return response.last_update.thermostat;
};

const getLastTemperature = (response: BrewServerResponse|null): number|null => {
  const thermostat = getThermostatResponse(response);
  return thermostat && thermostat.temperature;
};

const getTimeSinceLastUpdate = (response: BrewServerResponse|null): number|null => {
  const thermostat = getThermostatResponse(response);
  if (!thermostat) {
    return null;
  }
  const lastReadTime = moment(thermostat.read_at);
  const duration = moment.duration(moment().diff(lastReadTime));
  return duration.as('seconds');
};

export default function Brew() {
  const lastResponse = useBrewServerResponse();
  return (
    <Container>
      <View>
        <Text>
          Seconds since last update: {getTimeSinceLastUpdate(lastResponse)}
        </Text>
      </View>
      <View>
        <Text>
          Last temperature: {getLastTemperature(lastResponse)}
        </Text>
      </View>
    </Container>
  );
}
