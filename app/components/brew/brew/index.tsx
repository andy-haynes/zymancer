import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useBrewServerMonitor } from '../../../hooks/brew_server';
import { BrewServerResponse, ThermostatResponse } from '../../../types/brew_server';
import Container from '../../core/container';
import styles from './styles/brew';
import PID from './pid';
import Relays from './relays';

const getThermostatResponse = (response: BrewServerResponse|null): ThermostatResponse|null => {
  if (!response) {
    return null;
  }
  return response.lastUpdate.thermostat;
};

const getLastTemperature = (response: BrewServerResponse): number|null => {
  const thermostat = getThermostatResponse(response);
  return thermostat && thermostat.temperature;
};

const getTimeSinceLastUpdate = (response: BrewServerResponse): number|null => {
  const thermostat = getThermostatResponse(response);
  if (!thermostat) {
    return null;
  }
  const lastReadTime = moment(thermostat.read_at);
  const duration = moment.duration(moment().diff(lastReadTime));
  return duration.as('seconds');
};

export default function Brew() {
  const {
    brewServerError,
    lastResponse,
    setTargetTemperature,
  } = useBrewServerMonitor();

  return (
    <Container>
      {brewServerError && (
        <View>
          <Text>
            server error: {brewServerError?.message}
          </Text>
        </View>
      )}
      {lastResponse && (
        <>
          <View>
            <Text style={styles.lastUpdateText}>
              Seconds since last update: {getTimeSinceLastUpdate(lastResponse)}
            </Text>
          </View>
          <View>
            <Text style={styles.lastUpdateText}>
              Last temperature: {getLastTemperature(lastResponse)}
            </Text>
          </View>
          {lastResponse.lastUpdate.relays && (
            <Relays relays={lastResponse.lastUpdate.relays} />
          )}
          {lastResponse?.lastUpdate.thermostat.pid && (
            <PID pid={lastResponse.lastUpdate.thermostat.pid} />
          )}
        </>
      )}
      <View style={styles.setTemperatureButton}>
        <TouchableOpacity onPress={() => setTargetTemperature(60)}>
          <Text>
            Set Temperature
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
