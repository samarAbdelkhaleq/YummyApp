import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

export interface TokenType {
  accessTokenExpiration: number;
  refreshToken: string;
  token: string;
}
const ASYNC_KEYS = {
  token: 'TOKEN_KEY',
};

export const getToken: () => Promise<TokenType | null> = async () => {
  const token = await AsyncStorage.getItem(ASYNC_KEYS.token);
  return token ? JSON.parse(token) : null;
};

export const setToken = async (token: TokenType) => {
  await AsyncStorage.setItem(ASYNC_KEYS.token, JSON.stringify(token));
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(ASYNC_KEYS.token);
};

export const isExpiredToken = (token: TokenType) => {
  const expired_time = moment.unix(token.accessTokenExpiration).valueOf();
  if (expired_time >= new Date().getTime()) {
    return true;
  }
  return false;
};
