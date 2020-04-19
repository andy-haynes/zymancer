import NetInfo, { NetInfoState, NetInfoWifiState } from '@react-native-community/netinfo';

const HTTP_HEADERS = {
  'Content-Type': 'application/json',
};

async function getStatus(): Promise<NetInfoState> {
  return NetInfo.fetch();
}

type RequestOptions = {
  body?: any,
  method: string,
  suppressError?: boolean,
};

async function request<T>(url: string, options: RequestOptions): Promise<T|null> {
  const { body, method, suppressError } = options;
  const requestBody = body ? { body: JSON.stringify(body) } : {};
  const requestOptions = {
    ...(requestBody),
    headers: HTTP_HEADERS,
    method,
  };

  try {
    const response = await fetch(url, requestOptions);
    return response.json();
  } catch (e) {
    if (!suppressError) {
      console.warn(e, url);
    }
    return null;
  }
}

async function get<T>(url: string, suppressError: boolean = false) {
  return request<T>(url, {
    method: 'GET',
    suppressError,
  });
}

async function post<T>(url: string, body?: any) {
  return request<T>(url, {
    body,
    method: 'POST',
  });
}

async function getIPAddress(): Promise<string|null> {
  const status = await getStatus();
  if (status.type !== 'wifi') {
    return null;
  }

  return (<NetInfoWifiState>status).details.ipAddress;
}

export default {
  get,
  getIPAddress,
  post,
};
