import NetInfo, { NetInfoState, NetInfoWifiState } from '@react-native-community/netinfo';
import Promise from 'bluebird';

const HTTP_HEADERS = {
  'Content-Type': 'application/json',
};

function getStatus(): Promise<NetInfoState> {
  return Promise.try(() => NetInfo.fetch());
}

type RequestOptions = {
  body?: any,
  method: string,
  suppressError?: boolean,
};

function request<T>(url: string, options: RequestOptions): Promise<T|null> {
  const { body, method, suppressError } = options;
  const requestBody = body ? { body: JSON.stringify(body) } : {};
  const requestOptions = {
    ...(requestBody),
    headers: HTTP_HEADERS,
    method,
  };

  return Promise.resolve(fetch(url, requestOptions))
    .then((response) => response.json())
    .tapCatch((e) => {
      if (!suppressError) {
        console.warn(e, url);
      }
    })
    .catchReturn(null);
}

function get<T>(url: string, suppressError: boolean = false) {
  return request<T>(url, {
    method: 'GET',
    suppressError,
  });
}

function post<T>(url: string, body?: any) {
  return request<T>(url, {
    body,
    method: 'POST',
  });
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
  get,
  getIPAddress,
  post,
};
