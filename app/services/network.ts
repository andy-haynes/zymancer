import NetInfo, { NetInfoState, NetInfoWifiState } from '@react-native-community/netinfo';
import Promise from 'bluebird';

const HTTP_HEADERS = {
  'Content-Type': 'application/json',
};

function getStatus(): Promise<NetInfoState> {
  return Promise.try(() => NetInfo.fetch());
}

function request<T>(url: string, method: string, body?: any): Promise<T|null> {
  const requestBody = body ? { body: JSON.stringify(body) } : {};
  return Promise.try(() =>
    fetch(url, {
      ...(requestBody),
      headers: HTTP_HEADERS,
      method,
    })
  )
    .then((response) => response.json())
    .catchReturn(null);
}

function getIPAddress(): Promise<string|null> {
  return getStatus()
    .then((status) => {
      if (status.type !== 'wifi') {
        return null;
      }
      return (<NetInfoWifiState>status).details.ipAddress;
    });
}

export default {
  getIPAddress,
  request,
};
