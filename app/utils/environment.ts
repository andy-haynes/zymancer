import { env } from '../../app.json';
import EnvironmentKey from '../constants/environment_keys';

function getEnvironmentValue(key: EnvironmentKey): string {
  return env[key]?.value;
}

export function getApolloServerUrl() {
  return getEnvironmentValue(EnvironmentKey.APOLLO_SERVER_URL);
}
