import moment, { Moment } from 'moment';
import React from 'react';
import { Text, View } from 'react-native';

import { useBrewServerMonitor } from '../../../hooks/brew_server';
import { BrewServerResponse, ThermostatResponse } from '../../../types/brew_server';
import { Button, Column, Container, Row } from '../../core';
import styles from './styles/brew';
import PID from './pid';
import Relays from './relays';

const getThermostatResponse = (response: BrewServerResponse|null): ThermostatResponse|null => {
  if (!response || !response.lastUpdate) {
    return null;
  }

  return response.lastUpdate.thermostat;
};

const getLastTemperature = (response: BrewServerResponse): number|null => {
  const thermostat = getThermostatResponse(response);
  return thermostat && thermostat.temperature;
};

const getLastReadTime = (response: BrewServerResponse): Moment|null => {
  const thermostat = getThermostatResponse(response);
  if (!thermostat) {
    return null;
  }
  return moment(thermostat.read_at);
};

const getTimeSinceLastUpdate = (response: BrewServerResponse): number|null => {
  const lastReadTime = getLastReadTime(response);
  if (!lastReadTime) {
    return null;
  }

  const duration = moment.duration(moment().utc().diff(lastReadTime));
  return duration.as('seconds');
};

export default function Brew() {
  const {
    brewServerError,
    lastResponse,
    setTargetTemperature,
  } = useBrewServerMonitor({});

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
        <Column>
          <Row>
            <Text style={styles.lastUpdateText}>
              Last read: {getLastReadTime(lastResponse)?.format('ddd, MMM D YYYY hh:mm:ss') || 'No response'}
            </Text>
          </Row>
          <Row>
            <Text style={styles.lastUpdateText}>
              Seconds since last update: {getTimeSinceLastUpdate(lastResponse)}
            </Text>
          </Row>
          <Row>
            <Text style={styles.lastUpdateText}>
              Last temperature: {getLastTemperature(lastResponse)} ˚C
            </Text>
          </Row>
          {lastResponse?.lastUpdate?.relays && (
            <Relays relays={lastResponse.lastUpdate.relays} />
          )}
          {lastResponse?.lastUpdate?.thermostat.pid && (
            <PID pid={lastResponse.lastUpdate.thermostat.pid} />
          )}
        </Column>
      )}
      <Button onPress={() => setTargetTemperature(54)}>
        <Text>
          Set Temperature
        </Text>
      </Button>
    </Container>
  );
}
