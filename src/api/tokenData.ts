import AsyncStorage from "@react-native-async-storage/async-storage";

let apiToken: string;

export const API_STORAGE_KEYS = {
  API_TOKEN: "API_TOKEN",
};

export const setToken = (token: string): Promise<void> => {
  if (apiToken === token) {
    return Promise.resolve();
  }

  apiToken = token;
  return AsyncStorage.setItem(API_STORAGE_KEYS.API_TOKEN, token);
};

export const getToken = (): Promise<string | null> => {
  return AsyncStorage.getItem(API_STORAGE_KEYS.API_TOKEN);
};


export const clearToken = async () => {
  await AsyncStorage.removeItem(API_STORAGE_KEYS.API_TOKEN);
};

