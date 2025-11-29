import client from './client';

const TOKEN_EXPIRE_THRESHOLD = 60;

export const loginService = async (userName: string, password: string) => {
  try {
    const response = await client.post('user/login', {
      username: userName,
      password: password,
      expiresInMins: TOKEN_EXPIRE_THRESHOLD,
    });
    return response?.data;
  } catch (e) {
    throw e;
  }
};
