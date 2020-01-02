import AsyncStorage from '@react-native-community/async-storage';

async function getItem(key: string): Promise<string|null> {
  return AsyncStorage.getItem(key);
}

async function setItem(key: string, value: string): Promise<void> {
  return AsyncStorage.setItem(key, value);
}

export default {
  getItem,
  setItem,
};
